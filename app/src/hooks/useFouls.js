import { useLocalStorage} from "./useLocalStorage";

export const useFouls = (key) => {
    const [fouls, setValue] = useLocalStorage(key, 0);

    const setFouls = (add) => {
        setValue(add)
    };

    return [fouls, setFouls]
};