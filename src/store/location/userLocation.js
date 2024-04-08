import functions from "@react-native-firebase/functions";
import auth from "@react-native-firebase/auth";
import {
  errorGetEmployee,
  getEmployee,
  loadingEmployee,
} from "../employee/employeeSlice";
import {
  getOrdersForEmployee,
  loadingOrdersForEmployee,
} from "./employeeOrder";
import {
  errorGetEmployeeLocation,
  getEmployeeDataLocation,
} from "../employee/trackingEmployee";

export const saveUserLocation = (props) => async (dispatch) => {
  const { latitude, longitude, userData } = props;
  const user = auth().currentUser;

  if (!user) {
    console.log("Пользователь не найден.");
    return;
  }

  const userId = user.uid;

  try {
    const result = await functions().httpsCallable("saveUserLocation")({
      userId,
      latitude,
      longitude,
      userData,
    });

    // console.log(result.data);
  } catch (error) {
    console.error("Ошибка при сохранении местоположения:", error);
  }
};

export const findUsersNearby = (props) => async (dispatch) => {
  const latitude = parseFloat(props.latitude);
  const longitude = parseFloat(props.longitude);
  const radiusInKm = Number(props.radiusInKm);

  // Проверка на NaN, если преобразование не удалось
  if (isNaN(latitude) || isNaN(longitude) || isNaN(radiusInKm)) {
    console.error("Latitude, longitude, and radius must be valid numbers.");
    return;
  }

  const user = auth().currentUser;

  if (!user) {
    console.log("Пользователь не найден.");
    return;
  }

  dispatch(loadingEmployee());

  try {
    const result = await functions().httpsCallable("findUsersNearby")({
      latitude: latitude.toString(),
      longitude: longitude.toString(),
      radiusInKm: radiusInKm,
    });
    if (result) {
      dispatch(getEmployee(result.data));
    }
  } catch (error) {
    console.error("Ошибка при поиске пользователей поблизости:", error);
    dispatch(errorGetEmployee());
  }
};

export const sendOrderInfoForEmployee = (props) => async (dispatch) => {
  const { employeeId, customerData } = props;
  const sendCustomerData = functions().httpsCallable(
    "sendCustomerDataToEmployee"
  );
  sendCustomerData({
    employeeId: employeeId,
    customerData: customerData,
  })
    .then((result) => {
      // console.log(result.data.result);
    })
    .catch((error) => {
      console.error("Error sending customer data:", error);
    });
};

export const orderForEmployee = () => (dispatch) => {
  const user = auth().currentUser;

  if (!user) {
    console.log("Пользователь не найден.");
    return;
  }

  dispatch(loadingOrdersForEmployee());

  const getOrderData = functions().httpsCallable("getOrderData");
  getOrderData()
    .then((result) => {
      const orderArray = [];
      const orderData = result.data;
      if (orderData) {
        orderArray.push(orderData);

        dispatch(getOrdersForEmployee(orderArray));
      }
    })
    .catch((error) => {
      console.error("Error fetching order data:", error);
      // dispatch(getOrdersForEmployeeError(error));
    });
};

export const getEmployeeLocation = (props) => async (dispatch) => {
  const { employeeId } = props;
  const getEmployeeLocationById = functions().httpsCallable(
    "getEmployeeLocationById"
  );

  try {
    const response = await getEmployeeLocationById({ employeeId });
    dispatch(getEmployeeDataLocation(response.data));
  } catch (error) {
    dispatch(errorGetEmployeeLocation(error));
    console.error("Error fetching employee location:", error);
  }
};
