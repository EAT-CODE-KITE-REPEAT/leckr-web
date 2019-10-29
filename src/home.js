import React from "react";
import {
  Button,
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity
} from "react-native";
import Config from "./config";

const appWidth = 65;
const apps = [
  {
    image: require("../assets/communify.jpg"),
    name: "Communify",
    url: "https://apps.apple.com/gb/app/communify/id1366552547"
  },

  {
    image: require("../assets/dyme.jpg"),
    name: "Dyme",
    url:
      "https://apps.apple.com/nl/app/dyme-track-je-geld-automatisch/id1438647102"
  },

  {
    image: require("../assets/mypo.jpg"),
    name: "Mypo",
    url: "https://apps.apple.com/nl/app/mypo-order-tracking/id1296191492"
  },

  {
    image: require("../assets/bencompare.jpg"),
    name: "Bencompare",
    url: "https://apps.apple.com/nl/app/bencompare/id1237689750?l=en"
  },
  {
    image: require("../assets/dunbar.jpg"),
    name: "Dunbar",
    url: "https://apps.apple.com/ca/app/dunbar/id1457448974"
  },
  {
    image: require("../assets/ovfiets.jpg"),
    name: "OV-Fiets",
    url: "https://apps.apple.com/us/app/ov-fiets-app/id1471996949"
  }
];
class Home extends React.Component {
  renderItem({ item, index }) {
    return (
      <TouchableOpacity
        key={`key${index}`}
        onPress={() => Linking.openURL(item.url)}
      >
        <Image
          source={item.image}
          style={{
            margin: 8,
            width: appWidth,
            height: appWidth,
            borderRadius: 15
          }}
        />
      </TouchableOpacity>
    );
  }

  renderStory() {
    return (
      <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 20 }}>
        <View style={{ width: 200 }}>
          <Text>
            Apps maken is moeilijk en extreem duur. Maar dan ken je mij nog
            niet! Ik heb een codebase ontwikkeld waarmee ik veel sneller te werk
            kan gaan. Develop een app al vanaf €2000,-!
          </Text>
        </View>

        <View>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../assets/me.png")}
          />

          <Text>Wijnand Karsens</Text>

          <Button
            title="Contact"
            onPress={() => Linking.openURL(Config.email)}
          />
        </View>
      </View>
    );
  }

  renderApps() {
    return (
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        {apps.map((item, index) => this.renderItem({ item, index }))}
      </View>
    );
  }

  renderHeader() {
    return (
      <Text style={{ fontSize: 30, marginVertical: 20 }}>
        Hoi, ik maak apps.
      </Text>
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {this.renderHeader()}
        {this.renderApps()}
        {this.renderStory()}
      </View>
    );
  }
}

export default Home;
