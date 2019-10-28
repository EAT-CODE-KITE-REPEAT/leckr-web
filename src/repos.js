import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Config from "./config";
import { FontAwesome } from "@expo/vector-icons";

const ExternalLink = props => (
  <Text {...props} accessibilityRole="link" target="_blank" />
);

const baseUrlAPI = "https://api.github.com/";
const apiUrl = repo => `${baseUrlAPI}repos/${Config.githubUser}/${repo}`;
const ghUrl = repo => `https://github.com/${Config.githubUser}/${repo}`;
class Repos extends React.Component {
  state = {
    repos: []
  };

  componentDidMount() {
    this.fetchLibraries();
  }

  fetchLibraries() {
    Config.githubRepos.forEach(repo => {
      const url = apiUrl(repo);

      fetch(url)
        .then(response => response.json())
        .then(json => {
          this.setState({ repos: [...this.state.repos, json] });
        })
        .catch(e => console.log("Can't fetch", e));
    });
  }

  renderCounts(item) {
    return (
      <View style={{ flexDirection: "row" }}>
        {[
          { icon: "eye", count: item.watchers },
          { icon: "star", count: item.stargazers_count },
          { icon: "code-fork", count: item.forks_count }
        ].map(({ icon, count }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10
            }}
            key={icon}
          >
            <FontAwesome name={icon} style={{ paddingHorizontal: 5 }} />
            <Text>{count}</Text>
          </View>
        ))}
      </View>
    );
  }

  renderItem({ item, index }) {
    return (
      <ExternalLink href={ghUrl(item.name)}>
        <View style={{ marginVertical: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            {this.renderCounts(item)}
          </View>

          <Text style={{ marginTop: 15 }}>{item.description}</Text>
        </View>
      </ExternalLink>
    );
  }

  render() {
    return (
      <View style={{ margin: 20 }}>
        <Text>Hieronder kan je al mijn open-source repositories zien</Text>
        <FlatList
          data={this.state.repos}
          renderItem={item => this.renderItem(item)}
          ItemSeparatorComponent={() => (
            <View
              style={{ height: 1, width: "100%", backgroundColor: "#CCC" }}
            />
          )}
        />
      </View>
    );
  }
}
export default Repos;
