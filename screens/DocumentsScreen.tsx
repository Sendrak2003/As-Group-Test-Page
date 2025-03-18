import React, { useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

// Interfaces (Optional, but recommended for TypeScript)
interface DocumentsScreenProps {}

const DocumentsScreen: React.FC<DocumentsScreenProps> = () => {
  // Constants for better readability and maintainability
  const apartmentTitle = "Квартира на Чеховской";
  const apartmentLocation = "р-н Центральный Новосибирск. Д 45";
  const apartmentType = "частная квартира";
  const apartmentArea = "39.2 м²";
  const apartmentStartDate = "12 июн";
  const apartmentEndDate = "25 июн";
  const totalCostValue = "37 132 ₽";
  const contractDocumentText = "Pdf-файл Договор на оказание услуг";

  const styles = useMemo(() =>
    StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
      },
      contentContainer: {
        paddingBottom: 16,
      },
      semiTransparentText: {
        color: "rgba(0, 0, 0, 0.5)",
      },
      apartmentInfoContainer: {
        backgroundColor: "transparent",
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
      },
      apartmentInfoTop: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
      },
      iconContainer: {
        marginRight: 8,
        position: "relative",
      },
      progressIcon: {
        position: "absolute",
        bottom: -4,
        right: -4,
        backgroundColor: "white",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "white",
      },
      apartmentTitle: {
        fontSize: 16,
        fontWeight: "bold",
      },
      costEstimateButton: {
        backgroundColor: "rgba(241, 246, 250, 1)",
        padding: 14,
        borderRadius: 12,
        marginBottom: 12,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(58, 161, 255, 0.3)",
      },
      costEstimateButtonText: {
        color: "rgba(58, 161, 255, 1)",
      },
      totalCostContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
        backgroundColor: "rgba(241, 246, 250, 1)",
        borderRadius: 8,
      },
      totalCostValue: {
        fontWeight: "bold",
      },
      documentSection: {
        marginTop: 16,
      },
      documentItem: {
        padding: 12,
        borderRadius: 8,
        backgroundColor: "#fff",
        marginBottom: 8,
        borderWidth: 1,
        borderColor: "#e0e0e0",
      },
      addDocumentButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 4,
        backgroundColor: "transparent",
        marginTop: 16,
      },
      addDocumentButtonText: {
        color: "rgba(58, 161, 255, 1)",
        fontSize: 16,
        fontFamily: "Manrope",
      },
      viewMoreButton: {
        flexDirection: "row",
        backgroundColor: "transparent",
        marginTop: 21,
      },
      viewMoreButtonText: {
        color: "rgba(58, 161, 255, 1)",
        fontSize: 16,
        fontFamily: "Manrope",
        marginRight: 4,
      },
      estimateBlock: {
        marginBottom: 16,
      },
      addEstimateButton: {
        backgroundColor: "rgba(241, 246, 250, 1)",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
      },
      addEstimateButtonText: {
        color: "rgba(58, 161, 255, 1)",
        fontSize: 16,
        fontWeight: "bold",
      },
      contractDocument: {
        padding: 12,
        borderRadius: 8,
        backgroundColor: "#fff",
        marginBottom: 8,
        borderWidth: 1,
        borderColor: "#e0e0e0",
      },
      contractDocumentText: {
        flexWrap: "wrap",
      },
      estimateName: {
        marginTop: 15,
        fontSize: 16,
        fontFamily: "Manrope",
      },
      estimateNameAndStatusContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      statusTextContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
      },
      checkCircleIcon: {
        color: "rgba(0, 170, 1, 1)",
        marginRight: 4,
      },
    }),
    []
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Apartment Info Block */}
      <View style={styles.apartmentInfoContainer}>
        <View style={styles.apartmentInfoTop}>
          <View style={styles.iconContainer}>
            <FontAwesome name="home" size={27.77} color="rgb(0, 0, 0)" />
            <View style={styles.progressIcon}>
              <MaterialIcons name="access-time-filled" size={18} color="red" />
            </View>
          </View>
          <View>
            <Text style={styles.apartmentTitle}>{apartmentTitle}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons
                name="event"
                size={16}
                color="gray"
                style={{ marginRight: 4 }}
              />
              <Text style={{ color: "black" }}>
                {apartmentStartDate} - {apartmentEndDate}
              </Text>
            </View>
          </View>
        </View>
        <Text>{apartmentLocation}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.semiTransparentText}>Тип помещения:</Text>
          <Text>{apartmentType}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.semiTransparentText}>Площадь:</Text>
          <Text>{apartmentArea}</Text>
        </View>
      </View>

      {/* Cost Estimate Buttons */}
      <TouchableOpacity style={styles.costEstimateButton}>
        <Text style={styles.costEstimateButtonText}>
          Итоговая смета по работам
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.costEstimateButton}>
        <Text style={styles.costEstimateButtonText}>
          Итоговая смета по работам
        </Text>
      </TouchableOpacity>

      {/* Total Cost */}
      <View style={styles.totalCostContainer}>
        <Text>Итого по работам</Text>
        <Text style={styles.totalCostValue}>{totalCostValue}</Text>
      </View>

      {/* Document Section */}
      <View style={styles.documentSection}>
        <View style={styles.contractDocument}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "600", fontSize: 20 }}>Договор</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 32,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Ionicons
                name="document-text-sharp"
                size={24}
                color="rgba(147, 160, 194, 1)"
                style={{ marginRight: 8 }}
              />
              <Text style={[styles.contractDocumentText, { width: "100%" }]}>
                {contractDocumentText}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons
                name="check-circle"
                size={14.4}
                color="rgba(0, 170, 1, 1)"
                style={{ marginRight: 4 }}
              />
              <Text>Утверждено</Text>
            </View>
          </View>
          <Text
            style={{
              textAlign: "right",
              fontSize: 12,
              color: "rgba(147, 160, 194, 1)",
            }}
          >
            28.08.24
          </Text>
        </View>

        {/* Estimate Block */}
        <View style={styles.estimateBlock}>
          {/* Smeta 1 */}
          <View style={styles.documentItem}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "600", fontSize: 20 }}>
                  Смета №1
                </Text>
              </View>

              <FontAwesome6
                name="pen"
                size={16}
                color="rgba(147, 160, 194, 1)"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.estimateName}>
                Смета №1 По работам Кухня
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons
                  name="check-circle"
                  size={14.4}
                  style={styles.checkCircleIcon}
                />
                <Text>Выполнено</Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "rgba(147, 160, 194, 1)",
              }}
            >
              37 132 ₽
            </Text>

            <TouchableOpacity style={styles.addDocumentButton}>
              <Text style={styles.addDocumentButtonText}>
                + Счёт от магазина
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addDocumentButton}>
              <Text style={styles.addDocumentButtonText}>+ Добавить акт</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addDocumentButton}>
              <Text style={styles.addDocumentButtonText}>+ Добавить отчёт</Text>
            </TouchableOpacity>
          </View>

          {/* Smeta 2 */}
          <View style={styles.documentItem}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "600", fontSize: 20 }}>
                  Смета №2
                </Text>
              </View>

              <FontAwesome6
                name="pen"
                size={16}
                color="rgba(147, 160, 194, 1)"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.estimateName}>Смета №2 Спальня</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons
                  name="access-time-filled"
                  size={16}
                  color="red"
                  style={{ marginRight: 4 }}
                />
                <Text>Ожидает</Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "rgba(147, 160, 194, 1)",
              }}
            >
              180 156 ₽
            </Text>

            <TouchableOpacity style={styles.addDocumentButton}>
              <Text style={styles.addDocumentButtonText}>
                + Счёт от магазина
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addDocumentButton}>
              <Text style={styles.addDocumentButtonText}>+ Добавить акт</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addDocumentButton}>
              <Text style={styles.addDocumentButtonText}>+ Добавить отчёт</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ alignItems: "flex-start", marginBottom: 30 }}>
          <TouchableOpacity style={styles.addEstimateButton}>
            <Text style={styles.addEstimateButtonText}>+ Добавить смету</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default DocumentsScreen;