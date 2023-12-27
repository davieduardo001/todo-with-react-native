import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFEC",
    },

    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,

    },

    sectionTitle: {
      fontSize: 28,
      fontWeight: "bold",
    },

    items: {
      marginTop: 30
    },

    writeTaskWrapper: {
        position: "absolute",
        bottom: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },

    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: "#F1E4C3",
        width: 250,
        borderRadius: 60,
        borderColor: "#C6A969",
        borderWidth: 2,
    },

    addWrapper: {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: "#F1E4C3",
        borderColor: "#C6A969",
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    addText: {
      fontSize: 24,
      fontWeight: "bold"
    },
})

// color pallet
// #FFFFEC
// #F1E4C3
// #C6A969
// #597E52

export default styles;
