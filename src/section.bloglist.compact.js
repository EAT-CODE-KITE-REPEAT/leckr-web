import React from "react";
import { View, Text, Image } from "react-native";

import { fetchGhost } from "./fetch.ghost";
import Config from "./config";

const ExternalLink = props => (
  <Text {...props} accessibilityRole="link" target="_blank" />
);

type Article = {
  id: string,
  date?: Date,
  title: string,
  description: string,
  link: string,
  figure: string // can be an URL, but can also be required image
};

type Props = {};

/**
 * This section shows a compact list with outlinks to blog articles
 */
class Blog extends React.Component<Props> {
  state = {
    hover: null,
    mediumArticles: [],
    ghostArticles: [],
    isLoading: true
  };

  componentDidMount = async () => {
    const { limit } = this.props;
    await this.fetchMedium();

    const { labelSlug, ghostLink, ghostKey, slug } = Config;

    const ghostArticles = await fetchGhost(
      {
        labelSlug,
        ghostLink,
        ghostKey,
        slug
      },
      { limit }
    );
    this.setState({ ghostArticles });
    this.setState({ isLoading: false });
  };

  fetchMedium(url): Article[] {
    if (!url) {
      return null;
    }

    //returns list of medium articles

    // const medium: Article[] = data && data.web && data.web.mediumArticles;

    return null;
  }

  renderItem(c) {
    return (
      <ExternalLink href={c.link}>
        <View style={{ flexDirection: "row" }}>
          {c.figure ? (
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 20
              }}
              alt={c.title}
              source={c.figure}
            />
          ) : (
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#CCC",
                borderRadius: 20
              }}
            />
          )}

          <Text style={{ margin: 10 }} numberOfLines={2}>
            {c.title}
          </Text>
        </View>
      </ExternalLink>
    );
  }

  render() {
    const { title, articles, navigation } = this.props;

    const { isLoading, mediumArticles, ghostArticles } = this.state;

    const allArticles = []
      .concat(articles, mediumArticles, ghostArticles)
      .sort((a: Article, b: Article) => a.date < b.date);

    return (
      <View style={{ flex: 1, margin: 20 }}>
        <View>
          <Text>{title}</Text>
          {isLoading && <Text>Loading...</Text>}

          <View>
            {allArticles &&
              allArticles.length > 0 &&
              allArticles.map((c: Article) => (c ? this.renderItem(c) : null))}
          </View>
        </View>
      </View>
    );
  }
}

export default Blog;
