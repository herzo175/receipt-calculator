import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { v4 as uuidv4 } from "uuid"

import Layout from "../components/layout"
import Head from "../components/head"
import Members from "../components/members"
import Item from "../components/item"
import NewItem from "../components/new_item"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      members: [],
      items: [],
    }

    this.addMember = this.addMember.bind(this)
    this.removeMember = this.removeMember.bind(this)
    this.checkMember = this.checkMember.bind(this)
    this.uncheckMember = this.uncheckMember.bind(this)
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  addMember(memberName) {
    this.state.members.push({ name: memberName })
    this.state.items.forEach(item => {
      item.members.push(memberName)
    })

    this.setState({ members: this.state.members, items: this.state.items })
  }

  removeMember(memberName) {
    this.state.members.splice(this.state.members.findIndex(m => m.name === memberName), 1)
    this.state.items.forEach(item => {
      item.members.splice(item.members.findIndex(m => m.name === memberName), 1)
    })

    this.setState({ members: this.state.members, items: this.state.items })
  }

  checkMember(memberName, itemId) {
    const item = this.state.items.find(item => item.id === itemId)

    if (item && !item.members.includes(memberName)) {
      item.members.push(memberName)
      this.setState({ items: this.state.items })
    }
  }

  uncheckMember(memberName, itemId) {
    const item = this.state.items.find(item => item.id === itemId)

    if (item) {
      const memberIndex = item.members.findIndex(
        member => member === memberName
      )
      item.members.splice(memberIndex, 1)
      this.setState({ items: this.state.items })
    }
  }

  addItem(itemName, itemPrice) {
    if (!isNaN(itemPrice)) {
      const newItem = {
        id: uuidv4(),
        name: itemName,
        price: itemPrice,
        members: this.state.members.map(m => m.name),
      }

      this.state.items.push(newItem)
      this.setState({ items: this.state.items })
    }
  }

  removeItem(itemId) {
    const itemIndex = this.state.items.findIndex(item => item.id === itemId)

    if (itemIndex > -1) {
      this.state.items.splice(itemIndex, 1)
      this.setState({ items: this.state.items })
    }
  }

  render() {
    return (
      <Layout>
        <Head />
        <Container style={{ paddingTop: "2em" }}>
          <Row>
            <Col>
              <Members
                members={this.state.members}
                items={this.state.items}
                addMember={this.addMember}
                removeMember={this.removeMember}
              />
            </Col>
          </Row>

          <br />

          {this.state.items.map((item, i) => (
            <div key={i} style={{ paddingTop: "1em" }}>
              <Item
                item={item}
                members={this.state.members}
                checkMember={this.checkMember}
                uncheckMember={this.uncheckMember}
                removeItem={this.removeItem}
              />
            </div>
          ))}

          <br />

          <NewItem addItem={this.addItem} />
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
