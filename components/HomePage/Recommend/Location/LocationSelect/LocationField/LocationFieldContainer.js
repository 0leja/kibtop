import { useDispatch, useSelector } from "react-redux";
import { changeLocationFieldValue } from "../../../../../../store/slices/LocationSlice";
import LocationField from "./LocationField";

const LocationFieldContainer = () => {
    const {locationFieldValue} = useSelector(state => state.location)
    const dispatch = useDispatch()

    const onChangeLocationField = e => dispatch(changeLocationFieldValue({val: e.currentTarget.value}))

    return <LocationField {...{locationFieldValue, onChangeLocationField}} />;
}

export default LocationFieldContainer;