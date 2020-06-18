import React from 'react'
import { Menu, Dropdown, Form, Button } from 'semantic-ui-react'
import { Tags } from "../constants/Tags"

const NoteSearch = (props) => (
  <Menu>
    <Menu.Item>
      <Dropdown
        placeholder='Filter by Tag'
        value={props.tag}
        onChange={props.tagFilter}
        selection
        options={Tags}
      /> 
    </Menu.Item>
    <Menu.Item>
      <Form>
        <Form.Input>
          <input
            placeholder="Search..."
            value={props.searchText}
            onChange={props.search}>
          </input>
        </Form.Input>
      </Form> 
    </Menu.Item>
    <Menu.Item>
      <Button
      onClick={props.reset}
      >
        Reset
      </Button>
    </Menu.Item>
  </Menu>
)

export default NoteSearch