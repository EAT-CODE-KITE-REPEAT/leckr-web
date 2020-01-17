import React from "react";
import { Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import BloglistCompact from "./section.bloglist.compact";

import Repos from "./repos";
import Home from "./home";
import IPhone from "./iphone.wrapper";
import Config from "./config";

const title = Config.name + " - " + Config.titles[0];
const navigation = createSwitchNavigator({
  Home: {
    screen: props => (
      <IPhone title={title} navigation={props.navigation}>
        <Home {...props} />
      </IPhone>
    )
  },

  Blogs: {
    screen: props => (
      <IPhone title={title} navigation={props.navigation}>
        <Text style={{ fontSize: 30, marginVertical: 20, textAlign: "center" }}>
          Hi, I write.
        </Text>

        <BloglistCompact {...props} />
      </IPhone>
    ),
    path: "blogs"
  },

  Repos: {
    screen: props => (
      <IPhone title={title} navigation={props.navigation}>
        <Text style={{ fontSize: 30, marginVertical: 20, textAlign: "center" }}>
          Hi, I code.
        </Text>

        <Repos {...props} />
      </IPhone>
    ),
    path: "repositories"
  }
});

const navigationContainer = createAppContainer(navigation);

export default navigationContainer;
