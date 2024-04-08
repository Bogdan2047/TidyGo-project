import { View, Text, TextInput, StyleSheet } from "react-native";
import SvgInfo from "../../svg/labelInfo";
import SvgCheckmarkGrey from "../../svg/checkmarkGrey";

export const CompanyInfo = ({
  setCompanyName,
  setCompanyNumber,
  setCompanyWebsite,
  companyName,
  companyNumber,
  companyWebsite,
}) => {
  return (
    <View style={{ width: "100%" }}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: 500 }}>
          Please complete the fields.
        </Text>
      </View>
      <View style={{ paddingTop: 20 }}>
        <View>
          <View style={{ paddingBottom: 6 }}>
            <Text style={{ fontSize: 15, fontWeight: 500 }}>Company Name</Text>
          </View>
          <View style={{ width: "100%" }}>
            <TextInput
              placeholder="Name"
              value={companyName}
              style={{
                borderWidth: 1,
                borderColor:
                  companyName.length < 2 && companyName.length > 0
                    ? "#DE6060"
                    : companyName !== ""
                    ? "#71C35D"
                    : "#D3D3D3",
                borderStyle: "solid",
                borderRadius: 40,
                height: 40,
                paddingLeft: 12,
                paddingRight: 30,
                fontSize: 14,
              }}
              onChangeText={(text) => {
                let filteredText = text.replace(
                  /[^a-zA-Zа-яА-ЯєЄіІїЇґҐąĄćĆęĘłŁńŃóÓśŚźŹżŻ]/g,
                  ""
                );

                if (filteredText.length > 0) {
                  filteredText =
                    filteredText.charAt(0).toUpperCase() +
                    filteredText.slice(1).toLowerCase();
                }

                setCompanyName(filteredText);
              }}
            />
            <View style={{ position: "absolute", right: 10, top: 11 }}>
              {companyName.length < 2 && companyName.length > 0 ? (
                <SvgInfo />
              ) : (
                <SvgCheckmarkGrey
                  color={companyName !== "" ? "#71C35D" : "#797979"}
                />
              )}
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 20 }}>
          <View style={{ paddingBottom: 6 }}>
            <Text style={{ fontSize: 15, fontWeight: 500 }}>
              Company number
            </Text>
          </View>
          <View style={{ width: "100%", position: "relation" }}>
            <TextInput
              placeholder="AE000000"
              value={companyNumber}
              style={{
                borderWidth: 1,
                borderColor:
                  companyNumber.length < 8 && companyNumber.length > 0
                    ? "#DE6060"
                    : companyNumber !== ""
                    ? "#71C35D"
                    : "#D3D3D3",
                borderStyle: "solid",
                borderRadius: 40,
                height: 40,
                paddingLeft: 12,

                fontSize: 14,
              }}
              onChangeText={(text) => {
                const upperCaseText = text
                  .toUpperCase()
                  .replace(/[^A-Z0-9]/g, "");

                let formattedText =
                  "AE" + upperCaseText.slice(2).replace(/[^\d]/g, "");

                formattedText = formattedText.substring(0, 8);

                setCompanyNumber(formattedText);
              }}
            />
            <View style={{ position: "absolute", right: 10, top: 11 }}>
              {companyNumber.length < 8 && companyNumber.length > 0 ? (
                <SvgInfo />
              ) : (
                <SvgCheckmarkGrey
                  color={companyNumber !== "" ? "#71C35D" : "#797979"}
                />
              )}
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 20 }}>
          <View style={{ paddingBottom: 6 }}>
            <Text style={{ fontSize: 15, fontWeight: 500 }}>
              Company website
            </Text>
          </View>
          <View style={{ width: "100%" }}>
            <TextInput
              placeholder="www."
              value={companyWebsite}
              style={{
                borderWidth: 1,
                borderColor:
                  companyWebsite.length < 9 && companyWebsite.length > 0
                    ? "#DE6060"
                    : companyWebsite !== ""
                    ? "#71C35D"
                    : "#D3D3D3",
                borderStyle: "solid",
                borderRadius: 40,
                height: 40,
                paddingLeft: 12,
                paddingRight: 30,
                fontSize: 14,
              }}
              onChangeText={(text) => {
                let formattedText = text;

                // Проверяем, начинается ли введённый текст с "www."
                const prefix = "www.";
                if (!formattedText.toLowerCase().startsWith(prefix)) {
                  // Добавляем "www.", только если пользователь начал ввод с текста, не содержащего "www." в начале
                  formattedText = prefix + formattedText;
                }

                // Преобразуем в нижний регистр все символы после "www.", сохраняя "www." в нижнем регистре
                formattedText =
                  formattedText.slice(0, prefix.length) +
                  formattedText.slice(prefix.length).toLowerCase();

                // Проверяем, не стал ли текст равен "www." после удаления пользователем. Если да, оставляем его пустым
                if (formattedText.toLowerCase() === prefix) {
                  formattedText = "";
                }

                setCompanyWebsite(formattedText);
              }}
            />
            <View style={{ position: "absolute", right: 10, top: 11 }}>
              {companyWebsite.length < 9 && companyWebsite.length > 0 ? (
                <SvgInfo />
              ) : (
                <SvgCheckmarkGrey
                  color={companyWebsite !== "" ? "#71C35D" : "#797979"}
                />
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  writeComanyInfo: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    borderRadius: 40,
    height: 40,
    paddingLeft: 12,
    fontSize: 14,
  },
});
