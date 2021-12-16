import { IconButton } from '@material-ui/core';
import React from 'react';
import './SwipeButton.css';
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon  from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

function SwipeButton() {
    return (
      <div className="swipebutton">
        <IconButton className="swipebutton_repeat">
          <ReplayIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipebutton_left">
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipebutton_star">
          <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipebutton_right">
          <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipebutton_lightning">
          <FlashOnIcon fontSize="large" />
        </IconButton>
      </div>
    );
}

export default SwipeButton
