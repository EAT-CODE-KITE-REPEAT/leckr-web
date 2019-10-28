/**
 * Responsibility:
 *
 * Should be wrapped around every screen automatically on web using some kind of hook, but only on web.
 **/

import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import {
  View,
  Platform,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";

import Config from "./config";
const { width, height } = Dimensions.get("window");

class NavigatorItem extends React.Component {
  render() {
    const { navigation, to, icon } = this.props;

    return (
      <TouchableOpacity onPress={() => navigation.navigate(to)}>
        <FontAwesome name={icon} size={32} />
      </TouchableOpacity>
    );
  }
}

class IPhoneWrapper extends React.Component {
  state = {
    Helmet: null
  };

  componentDidMount() {
    this.importHelmetIfWeb();
  }

  async importHelmetIfWeb() {
    if (Platform.OS === "web") {
      const Helmet = await import("react-helmet");
      this.setState({ Helmet: Helmet.default });
    }
  }

  renderHelmet() {
    const { Helmet } = this.state;

    const { title } = this.props;

    return Platform.OS === "web" && Helmet ? (
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
    ) : (
      undefined
    );
  }

  renderMenu() {
    const { navigation } = this.props;

    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          borderTopWidth: 1,
          borderTopColor: "#CCC",
          paddingVertical: 20
        }}
      >
        <NavigatorItem icon="home" navigation={navigation} to="Home" />
        <NavigatorItem icon="list" navigation={navigation} to="Blogs" />
        <NavigatorItem icon="star" navigation={navigation} to="Repos" />
      </View>
    );
  }

  render() {
    const { children } = this.props;

    const iPhoneWidth = 360;
    return Platform.OS === "web" && width > 800 ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ position: "absolute", width, height }}
          source={require("../assets/header.jpg")}
        />
        {this.renderHelmet()}
        <View
          style={{
            backgroundColor: "transparent",
            width: iPhoneWidth,
            height,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50
          }}
        >
          <View
            style={{
              height: height - 30,
              borderRadius: 50,
              backgroundColor: "rgba(255, 255, 255, 0.6);",
              borderColor: "black",
              borderWidth: 20
            }}
          >
            <ScrollView
              contentContainerStyle={[
                {
                  width: iPhoneWidth - 30
                }
              ]}
            >
              {children}
            </ScrollView>
            {this.renderMenu()}
          </View>
        </View>
      </View>
    ) : (
      <View style={{ flex: 1 }}>
        <ScrollView>{children}</ScrollView>
        {this.renderMenu()}
      </View>
    );
  }
}

export default IPhoneWrapper;
