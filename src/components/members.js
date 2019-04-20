import React from "react"

import { Card, InputGroup, FormControl, Button } from "react-bootstrap"

class Members extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      memberName: "",
    }

    this.addMember = this.addMember.bind(this)
    this.calculateMemberTotal = this.calculateMemberTotal.bind(this)
  }

  addMember() {
    this.props.addMember(this.state.memberName)
    this.setState({ memberName: "" })
  }

  calculateMemberTotal(memberName) {
    return this.props.items.reduce((acc, item) => {
      if (item.members.includes(memberName)) {
        return acc + item.price / item.members.length
      } else {
        return acc
      }
    }, 0)
  }

  render() {
    return (
      <Card>
        <Card.Body>
          {this.props.members.map((member, i) => (
            <Card.Title key={i}>
              {member.name} - $
              {this.calculateMemberTotal(member.name).toFixed(2)}
            </Card.Title>
          ))}

          <br />

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Member Name"
              value={this.state.memberName}
              onChange={e => this.setState({ memberName: e.target.value })}
            />
            <InputGroup.Append>
              <Button variant="primary" onClick={this.addMember}>
                Add
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Card.Body>
      </Card>
    )
  }
}

export default Members
