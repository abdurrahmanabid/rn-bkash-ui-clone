import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Menu = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.headerText}>বিকাশ মেনু</Text>
              <TouchableOpacity
                style={styles.languageButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.languageButtonText}>Close</Text>
              </TouchableOpacity>
            </View>

            {/* Menu Items */}
            <ScrollView style={styles.menuItems}>
              <MenuItem icon="home" label="হোম" />
              <MenuItem icon="chart-bar" label="স্টেটমেন্ট" />
              <MenuItem icon="exclamation-triangle" label="লিমিট" />
              <MenuItem icon="tag" label="কুপন" />
              <MenuItem icon="users" label="রেফার বিকাশ অ্যাপ" />
              <MenuItem
                icon="map-marker-alt"
                label="বিকাশ ম্যাপ"
                newIndicator
              />
              <MenuItem icon="info-circle" label="বিকাশ নিয়ে জানুন" />
              <MenuItem icon="cogs" label="সেটিংস" />
              <MenuItem icon="headset" label="সাপোর্ট" />
              <MenuItem icon="sign-out-alt" label="লগ আউট" />
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const MenuItem = ({ icon, label, newIndicator }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.iconContainer}>
      <FontAwesome5 name={icon} size={24} color="#E91E63" />
    </View>
    <Text style={styles.menuItemText}>{label}</Text>
    {newIndicator && <View style={styles.newIndicator} />}
  </TouchableOpacity>
);

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  triggerButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#E91E63",
    borderRadius: 25,
  },
  triggerButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
  },
  header: {
    padding: 20,
    backgroundColor: "#E91E63",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  languageButton: {
    marginTop: 10,
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: "#fff",
    elevation: 5,
  },
  languageButtonText: {
    color: "#E91E63",
    fontWeight: "bold",
    fontSize: 16,
  },
  menuItems: {
    paddingHorizontal: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    position: "relative",
  },
  iconContainer: {
    width: 30,
    alignItems: "center",
  },
  menuItemText: {
    marginLeft: 20,
    fontSize: 16,
    color: "#333",
  },
  newIndicator: {
    width: 10,
    height: 10,
    backgroundColor: "#E91E63",
    borderRadius: 5,
    position: "absolute",
    right: 10,
  },
});
