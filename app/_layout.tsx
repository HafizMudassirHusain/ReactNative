import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image, Dimensions,
   StyleSheet, Text, View, } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';

const SCREEN_HEIGHT = Dimensions.get("screen").height;

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <>
   <View style={style.container}>
    <View style={style.header}>
    <SimpleLineIcons name="menu" size={24} color="black" />
    <Text style={style.headerTxt}>Bykea</Text>
    <MaterialCommunityIcons name="phone-dial-outline" size={24} color="black" />
    </View>
    <View style={style.slider}>
    <Image 
    style={style.sliderImg}
  source={{
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlehOF0EnLGJDTPc3TrBz93V25TIul_sNrQ&s"
  }} 
/>
    <View  style={style.midtabs}>
    <MaterialIcons name="message" size={24} color="black" style={{borderRightWidth:1,width:"30%"}} />
    <FontAwesome name="dollar" size={24} color="black"  />
    </View>
    </View>



          <View style={style.bottomContainer}>
        <View style={style.row}>
          <Card title={"Carpool"} icon={"electric-car"} bgColor={"#c1e1c5"} />
          <Card title={"Ride"} icon={"bike-scooter"} bgColor={"#bedadc"} />
        </View>
        <View style={style.row}>
          <Card title={"Carpool"} icon={"electric-car"} bgColor={"#c1e1c5"} />
          <Card title={"Ride"} icon={"bike-scooter"} bgColor={"#bedadc"} />
        </View>
        <View style={style.row}>
          <Card title={"Carpool"} icon={"electric-car"} bgColor={"#c1e1c5"} />
          <Card title={"Ride"} icon={"bike-scooter"} bgColor={"#bedadc"} />
        </View>
      </View>


   </View>
    </>
  );
}

const Card = ({
  bgColor,
  icon,
  title,
}: {
  bgColor: string;
  icon: any;
  title: string;
}) => {
  return (
    <View style={[style.card, { backgroundColor: bgColor }]}>
      <Text style={{ textAlign: "right" }}>{title}</Text>
      <MaterialIcons name={icon} size={70} color="black" />
    </View>
  );
};


const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff",
  },
  header:{
 justifyContent:"space-between",
   flexDirection:"row",
   padding:15,
  boxShadow:" 0px 5px 15px -3px rgba(0,0,0,0.3)",
  },
  headerTxt:{
    color:"green",
    fontSize:20,
    letterSpacing:1,
    fontWeight:"bold",
  },
  slider: {
    backgroundColor:"#ededed",
    height: SCREEN_HEIGHT / 4,
    paddingVertical:10,
    paddingHorizontal:10,
    borderRadius: 12,
  },
  sliderImg: {
    height: "86%",
    borderRadius: 12,
  },
  midtabs: {
    backgroundColor:"#ffffff",
    // width:"90%",
    flexDirection: "row",
    marginTop:20,
    justifyContent:"space-around",
    alignItems:"center",
    borderRadius:10,
    height:45,
    paddingVertical:10,
boxShadow: "1px 1px 32px -6px rgba(150, 150, 152, 1)",
  }, infoView: {
    height: 45,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    marginTop: -15,
    marginHorizontal: 20,
  },
  bottomContainer: { flex: 1, margin: 10,marginTop:50, gap: 15 },
  row: { flex: 1, flexDirection: "row", gap: 15 },
  card: {
    flex: 1,
    borderRadius: 12,
    padding: 10,
    justifyContent: "space-between",
  },
});


