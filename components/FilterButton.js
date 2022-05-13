import { Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import { setFilter } from "./slices/FilterSlice";

export const FilterButton = (props) => {
    const dispatch = useDispatch();

    return (
        <Button title={props.title}
            onPress={() => {
                dispatch(setFilter(props.type));
            }}
            buttonStyle={{
                borderRadius: 3,
                backgroundColor: "#91A6FF",
            }}
            containerStyle={{
                width: 150,
                marginTop: 5,
                marginHorizontal: 5,
            }}
        />
    )
}