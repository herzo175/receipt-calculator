import React from "react"

import { Card, Button, ButtonToolbar } from "react-bootstrap"

const Item = props => (
  <Card>
    <Card.Body>
      <ButtonToolbar className="justify-content-between">
        <Card.Title>
          {props.item.name} - ${props.item.price}
        </Card.Title>
        <Button
          variant="danger"
          onClick={() => props.removeItem(props.item.id)}
        >
          Remove
        </Button>
      </ButtonToolbar>

      <br />

      {props.members.map((member, i) => (
        <Card.Subtitle key={i} style={{ paddingTop: "0.5em" }}>
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id={props.item.id + "-switch-" + member.name}
              checked={props.item.members.includes(member.name)}
              onChange={e => {
                if (e.target.checked) {
                  props.checkMember(member.name, props.item.id)
                } else {
                  props.uncheckMember(member.name, props.item.id)
                }
              }}
            />
            <label
              className="custom-control-label"
              htmlFor={props.item.id + "-switch-" + member.name}
            >
              {member.name}
            </label>
          </div>
        </Card.Subtitle>
      ))}
    </Card.Body>
  </Card>
)

export default Item
