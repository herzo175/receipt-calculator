import React from "react"

import { Card, InputGroup, FormControl, Button, Row, Col } from "react-bootstrap"

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
            <Row style={{ paddingBottom: "1em" }}>
              <Col xs={9}>
                <Card.Title key={i}>
                  {member.name} - $
                  {this.calculateMemberTotal(member.name).toFixed(2)}
                </Card.Title>
              </Col>
              <Col>
                <div style={{ display: "flex" }}>
                  <Button
                    variant="danger"
                    onClick={() => this.props.removeMember(member.name)}
                    style={{ marginLeft: "auto" }}
                    variant="danger"
                  >
                    Remove
                  </Button>
                </div>
              </Col>
            </Row>
          ))}

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
