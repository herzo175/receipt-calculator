import React from "React"

import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  ButtonToolbar,
} from "react-bootstrap"

class NewItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      itemName: "",
      itemPrice: 0,
    }
  }

  render() {
    return (
      <>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Item Name"
                value={this.state.itemName}
                onChange={e => this.setState({ itemName: e.target.value })}
              />
              <FormControl
                placeholder="Price"
                value={this.state.itemPrice}
                onChange={e => {
                  this.setState({ itemPrice: e.target.value })
                }}
              />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <ButtonToolbar>
              <Button
                variant="primary"
                onClick={() => {
                  this.props.addItem(this.state.itemName, this.state.itemPrice)
                  this.setState({ itemPrice: 0 })
                  this.setState({ itemName: "" })
                }}
                block
              >
                Add Item
              </Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </>
    )
  }
}

export default NewItem
