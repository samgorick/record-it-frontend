import React from 'react'
import { Menu, Dropdown, Form, Button } from 'semantic-ui-react'
import { Tags } from "../components/Tags"

class SearchBar extends React.Component {

  render(){
    return(
      <Menu>
        <Menu.Item>
          <Dropdown
            placeholder='Filter by Tag'
            value={this.props.tag}
            onChange={this.props.tagFilter}
            selection
            options={Tags}
          /> 
        </Menu.Item>
        <Menu.Item>
          <Form>
            <Form.Input>
              <input
                placeholder="Search..."
                value={this.props.searchText}
                onChange={this.props.search}>
              </input>
            </Form.Input>
          </Form> 
        </Menu.Item>
        <Menu.Item>
          <Button
          onClick={this.props.reset}
          >
            Reset
          </Button>
        </Menu.Item>
      </Menu>

    )
  }
}

export default SearchBar