import React from 'react'

import Link from '@jetbrains/ring-ui/dist/link/link.js'
import Badge from '@jetbrains/ring-ui/dist/badge/badge.js'
import '@jetbrains/ring-ui/dist/_helpers/_rollupPluginBabelHelpers.js'
import 'focus-visible'
import 'classnames'
import '@jetbrains/ring-ui/dist/global/memoize.js'
import '@jetbrains/ring-ui/dist/global/data-tests.js'
import '@jetbrains/ring-ui/dist/link/clickableLink.js'
import '@jetbrains/ring-ui/dist/_helpers/link.js'
import '@jetbrains/ring-ui/dist/_helpers/badge.js'


const items = [{
  id: 1,
  title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Assigner"), " in 60 projects"),
  collapsible: true,
  selectable: true,
  items: [{
    id: 11,
    title: '6 projects: as a member of jetbrains-team',
    collapsible: true,
    selectable: true,
    items: [{
      id: 111,
      // selectable: true,
      title: /*#__PURE__*/<Link href="#">TeamCity</Link>
    }, {
      id: 112,
      // selectable: true,
      title: /*#__PURE__*/<Link href="#">YouTrack</Link>
    }, {
      id: 113,
      // selectable: true,
      title: /*#__PURE__*/<Link href="#">Sandbox</Link>
    }, {
      id: 114,
      selectable: true,
      title: /*#__PURE__*/React.createElement(Link, {
        href: "#"
      }, "Exception Analyzer")
    }, {
      id: 115,
      selectable: true,
      title: /*#__PURE__*/React.createElement(Link, {
        href: "#"
      }, "MPS")
    }]
  }]
}, {
  id: 2,
  title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Code Reviewer"), " in 5 projects"),
  selectable: true,
  collapsible: true,
  items: [{
    id: 21,
    selectable: true,
    title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Link, {
      href: "#"
    }, "JetProfile"), /*#__PURE__*/React.createElement("span", null, " "), /*#__PURE__*/React.createElement(Badge, {
      gray: true
    }, "duplicate"))
  }, {
    id: 22,
    title: '6 projects: as a member of jetbrains-team',
    collapsible: true,
    items: [{
      id: 221,
      collapsible: true,
      title: /*#__PURE__*/React.createElement(Link, {
        href: "#"
      }, "TeamCity")
    }, {
      id: 222,
      collapsible: true,
      title: /*#__PURE__*/React.createElement(Link, {
        href: "#"
      }, "YouTrack")
    }, {
      id: 223,
      collapsible: true,
      title: /*#__PURE__*/React.createElement(Link, {
        href: "#"
      }, "Sandbox")
    }, {
      id: 224,
      collapsible: true,
      title: /*#__PURE__*/React.createElement(Link, {
        href: "#"
      }, "Exception Analyzer")
    }, {
      id: 225,
      collapsible: true,
      title: /*#__PURE__*/React.createElement(Link, {
        href: "#"
      }, "MPS")
    }]
  }, {
    id: 23,
    collapsible: true,
    title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Link, {
      href: "#"
    }, "CustomJDK"), /*#__PURE__*/React.createElement("span", null, ": as a member of ide-developers"))
  }]
}, {
  id: 3,
  title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Code Viewer"), " in 5 projects"),
  selectable: true,
  collapsible: true,
  items: [{
    id: 31,
    collapsible: true,
    title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Link, {
      href: "#"
    }, "ide-frontend"), /*#__PURE__*/React.createElement("span", null, ": as a member of ide-developers"))
  }, {
    id: 32,
    collapsible: true,
    title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Link, {
      href: "#"
    }, "ide-frontend"), /*#__PURE__*/React.createElement("span", null, ": as a member of ide-frontend Code Viewers"))
  }]
}, {
  id: 4,
  title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Commenter"), " in 12 projects"),
  collapsible: true,
  items: [{
    id: 41,
    collapsible: true,
    title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Link, {
      href: "#"
    }, "Intellij IDEA"), /*#__PURE__*/React.createElement("span", null, ": as a member of Registered Users"))
  }, {
    id: 42,
    collapsible: true,
    title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Link, {
      href: "#"
    }, "YouTrack Backlog"), /*#__PURE__*/React.createElement("span", null, ": as a member of jetbrains-team"))
  }]
}, {
  id: 5,
  collapsible: true,
  title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Developer"), /*#__PURE__*/React.createElement("span", null, " in 57 projects "), /*#__PURE__*/React.createElement(Badge, null, "team role")),
  items: [{
    id: 51,
    selectable: true,
    collapsible: true,
    title: /*#__PURE__*/React.createElement(Link, {
      href: "#"
    }, "Wasabi")
  }]
}, {
  id: 6,
  collapsible: true,
  title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Git Hosting Admin"), /*#__PURE__*/React.createElement("span", null, " in project "), /*#__PURE__*/React.createElement(Link, {
    href: "#"
  }, "Hackathon 2016"), /*#__PURE__*/React.createElement("span", null, ": as a member of jetbrains-team"))
}, {
  id: 7,
  title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Git Hosting Checkout"), " in 7 projects"),
  selectable: true,
  collapsible: true
}]
const moreItems = [{
  id: 91,
  selectable: true,
  collapsible: true,
  title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Link, {
    href: "#"
  }, "More item 1"), /*#__PURE__*/React.createElement("span", null, " "), /*#__PURE__*/React.createElement(Badge, {
    gray: true
  }, "duplicate"))
}, {
  id: 92,
  selectable: true,
  collapsible: true,
  title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Link, {
    href: "#"
  }, "More item 2"), /*#__PURE__*/React.createElement("span", null, " "), /*#__PURE__*/React.createElement(Badge, {
    gray: true
  }, "duplicate"))
}]


export { items as default, moreItems }
