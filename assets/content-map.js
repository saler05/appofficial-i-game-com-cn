const contentMap = {
  sections: [
    {
      id: "home",
      title: "首页",
      tags: ["爱游戏", "平台", "首页推荐"],
      keywords: ["爱游戏", "官方平台", "游戏推荐"],
      url: "https://appofficial-i-game.com.cn"
    },
    {
      id: "news",
      title: "新闻动态",
      tags: ["爱游戏", "新闻", "更新"],
      keywords: ["爱游戏新闻", "版本更新", "活动公告"],
      url: "https://appofficial-i-game.com.cn/news"
    },
    {
      id: "games",
      title: "游戏库",
      tags: ["爱游戏", "游戏", "分类"],
      keywords: ["爱游戏游戏库", "热门游戏", "新游推荐"],
      url: "https://appofficial-i-game.com.cn/games"
    },
    {
      id: "support",
      title: "客服支持",
      tags: ["爱游戏", "客服", "帮助"],
      keywords: ["爱游戏客服", "帮助中心", "常见问题"],
      url: "https://appofficial-i-game.com.cn/support"
    },
    {
      id: "about",
      title: "关于我们",
      tags: ["爱游戏", "关于", "介绍"],
      keywords: ["爱游戏官网", "公司介绍", "联系我们"],
      url: "https://appofficial-i-game.com.cn/about"
    },
    {
      id: "rank",
      title: "排行榜",
      tags: ["爱游戏", "排行", "热门"],
      keywords: ["爱游戏排行", "下载榜", "热游榜"],
      url: "https://appofficial-i-game.com.cn/rank"
    }
  ],
  defaultSection: "home",
  searchFilter: function(query) {
    if (!query || query.trim() === "") {
      return this.sections;
    }
    const lowerQuery = query.toLowerCase().trim();
    return this.sections.filter(function(section) {
      const titleMatch = section.title.toLowerCase().includes(lowerQuery);
      const tagMatch = section.tags.some(function(tag) {
        return tag.toLowerCase().includes(lowerQuery);
      });
      const keywordMatch = section.keywords.some(function(kw) {
        return kw.toLowerCase().includes(lowerQuery);
      });
      return titleMatch || tagMatch || keywordMatch;
    });
  },
  getSectionById: function(id) {
    for (let i = 0; i < this.sections.length; i++) {
      if (this.sections[i].id === id) {
        return this.sections[i];
      }
    }
    return null;
  },
  getAllTags: function() {
    const tagSet = {};
    for (let i = 0; i < this.sections.length; i++) {
      const tags = this.sections[i].tags;
      for (let j = 0; j < tags.length; j++) {
        tagSet[tags[j]] = true;
      }
    }
    return Object.keys(tagSet);
  },
  getAllKeywords: function() {
    const kwSet = {};
    for (let i = 0; i < this.sections.length; i++) {
      const kws = this.sections[i].keywords;
      for (let j = 0; j < kws.length; j++) {
        kwSet[kws[j]] = true;
      }
    }
    return Object.keys(kwSet);
  },
  getSectionsByTag: function(tag) {
    if (!tag) {
      return [];
    }
    const lowerTag = tag.toLowerCase();
    return this.sections.filter(function(section) {
      return section.tags.some(function(t) {
        return t.toLowerCase() === lowerTag;
      });
    });
  },
  getSectionsByKeyword: function(keyword) {
    if (!keyword) {
      return [];
    }
    const lowerKw = keyword.toLowerCase();
    return this.sections.filter(function(section) {
      return section.keywords.some(function(kw) {
        return kw.toLowerCase() === lowerKw;
      });
    });
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = contentMap;
}