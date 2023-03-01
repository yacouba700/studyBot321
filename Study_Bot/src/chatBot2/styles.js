import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  incomingMsgBox: {
    backgroundColor: "#e6e6e6",
    maxWidth: "70%",
    borderBottomLeftRadius:18,
    borderBottomRightRadius:18,
    borderTopRightRadius: 18,
    padding: 8,
    paddingHorizontal: 5,
    alignSelf: "flex-start",
    marginVertical: 5,
    marginHorizontal: 5,
   // borderWidth: 0.5,
  },
  incomingMsgText: { color: "black", fontSize: 16 },

  sentMsgBox: {
    backgroundColor: "#e6e6e6",
    maxWidth: "70%",
    borderTopLeftRadius: 18,
    borderBottomLeftRadius:18,
    borderBottomRightRadius:18,
  
    padding: 8,
    alignSelf: "flex-end",
    marginVertical: 5,
    marginHorizontal: 5,
  },

  sentMsgText: { color: "black", fontSize: 16, },

  typeMsgContainer: {
    flexDirection: "row",
    marginHorizontal: 5,
    bottom: 5,
  },

  typeMsgBox: {
    borderWidth: 0.8,
    borderColor: "grey",
    padding: 10,
    width: "80%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  sendBtn: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },

  sendTxt: { color: "white" },
  //---------------------

  headerContainer: {
    height: 60,
    backgroundColor: '#007AFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom:26
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  Bodycontainer: {
    //flex: 1,
   paddingHorizontal: 10,
    //paddingVertical: 0,
   // minHeight: "71%",
    backgroundColor: '#f5f5f5',
  },
scrollView: {
  
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  message: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
  },
  sender: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  messageText: {},

  bottomcontainer: {
    
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#cccccc',//'#E5E5EA',
    paddingHorizontal: 16,
    paddingVertical: 10,

    // pH : 8 , PV : 16
  },
  textInputContainer: {

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F7',
    borderRadius: 20,
   paddingHorizontal: 20,
   paddingVertical: 0,
  
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 0, // Ajoute un espacement en bas de l'élément
  },
  textInput: {
    
    flex: 1,
    height:40,
   maxHeight:60,
    fontFamily: "sans-serif",//'HelveticaNeue',
    fontSize: 16,
    color: '#262626',
    textAlignVertical: 'top',
    
  },
  userIcon: {
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    padding: 8,
  },
  speechIcon: {
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    padding: 1,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    padding: 8,
    marginLeft: 10,
  },

  
  bottomBar: {
    height: "5%",
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#DADADA',
    alignItems: "center",
  },
  bottomBarText: {
    
    color: '#6B6B6B',
    fontSize: 14,
  },
});

export default styles;
