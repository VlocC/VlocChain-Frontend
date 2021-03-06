import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {
  LogoText,
  HeaderContainer,
  ButtonContainer,
  Button,
  SearchBarIcon,
  SearchBarInput,
  SearchBarWrapper
} from './styledComponents.js';

const activeStyle = {
  'backgroundColor': 'navy'
}

class VideoPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeaderContainer>
        <LogoText>VlocC</LogoText>
        <SearchBarWrapper>
          <SearchBarInput />
          <SearchBarIcon>O</SearchBarIcon>
        </SearchBarWrapper>
        <ButtonContainer>
          <NavLink to='/' exact activeStyle={activeStyle} style={{height : '100%'}}>
            <Button>
              Browse
            </Button>
          </NavLink>
          <NavLink to='/login' activeStyle={activeStyle} style={{height : '100%'}}>
            <Button>
              Login
            </Button>
          </NavLink>
          <NavLink to='/upload' activeStyle={activeStyle} style={{height : '100%'}}>
            <Button>
              Upload
            </Button>
          </NavLink>
          <Button>Setting</Button>
        </ButtonContainer>
      </HeaderContainer>
    );
  }
}

export default VideoPage;
