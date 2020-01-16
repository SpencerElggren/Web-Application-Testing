import { useLocalStorage} from "./useLocalStorage";

export const useBalls = (key) => {
    const [balls, setValue] = useLocalStorage(key, 0);

    const setBalls = (add) => {
        setValue(add)
    };

    return [balls, setBalls]
};