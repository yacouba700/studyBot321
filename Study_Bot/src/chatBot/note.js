<View style={styles.typeMsgContainer}>
<TextInput
  style={styles.typeMsgBox}
  value={msg}
  placeholder="Type Here ..."
  onChangeText={(val) => setMsg(val)}
/>
<TouchableOpacity
  style={[styles.sendBtn, { backgroundColor: msg ? "orange" : "grey" }]}
  disabled={msg ? false : true}
  onPress={() => onSendMsg()}
>
  <Text style={styles.sendTxt}>send</Text>
</TouchableOpacity>
</View>













const [msg, setMsg] = useState("");
  const [chatList, setChatList] = useState([]);

  const getAnswer = async (q) => {
    try {
     
      const response = await fecth("http://192.168.43.145/500", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt: q
        })
      })
      const responseData = response.json();
      const parsedData = responseData.bot.trim();
     
        chats = [...chats, { msg: parsedData, incomingMsg: true }];
        setChatList([...chats].reverse());
        return;
       
      /*const response = await fetch("http://localhost:5000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: "hello",
        }),
      });
      const data = await response.json();
      const parsedData = data.bot.trim();
      chats = [...chats, { msg: parsedData, incomingMsg: true }];
      setChatList([...chats].reverse());
      // console.log(parsedData);
      return;*/
    } catch (error) {
      console.log("error :", error);
    }
  };

  const onSendMsg = () => {
    chats = [...chats, { msg: msg, sentMsg: true }];
    setChatList([...chats].reverse());
    setTimeout(() => {
      getAnswer(msg);
    }, 1000);
    setMsg("");
  };
