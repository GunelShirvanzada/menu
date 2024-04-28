import { createContext, useContext, useState } from "react";
import data from './data'

const AppContext = createContext();

const AllCategories = data.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
        acc.push(item.category)  
    }
    return acc;
}, ['all'])

const AppProvider = ({ children }) => {
    const [categories, setCategories] = useState(AllCategories);
    const [menuItem, setMenuItem] = useState(data);

    const filter = (category) => {
        if (category === 'all') {
            setMenuItem(data);
            return;
        }

        const filtered = data.filter((item) => {
            return item.category === category;
        })

        setMenuItem(filtered)
    }

    return <AppContext.Provider value={{categories, menuItem, filter}}> {children} </AppContext.Provider>
};

export const GlobalContext = () => {
    return useContext(AppContext)
}
export { AppProvider }