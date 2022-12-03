import React from "react";
import { FiBookmark, FiSkipBack } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';
import 'tippy.js/animations/perspective.css';
import '../styles/components/detailbutton.css';

export default function DetailButton({ bookmarkRecipe, isBookmarked }) {
  const navigate = useNavigate();
  return (
    <div className="detail-button-container">
      <div>
        <Tippy placement="right" interactive={true} content='Return' offset={[0, 20]} theme='light-border' animation='perspective'>
          <button type="button" onClick={() => navigate(-1)} ><FiSkipBack /></button>
        </Tippy>
      </div>
      <div>
        {
          bookmarkRecipe
          ? isBookmarked 
            ? <Tippy placement="left" interactive={true} content='Recipe Bookmarked' offset={[0, 20]} theme='light-border' animation='perspective'>
                <button type="button" className="bookmark-btn bookmarked" onClick={bookmarkRecipe}><FiBookmark /></button>
              </Tippy>
            : <Tippy placement="left" interactive={true} content='Bookmark Recipe' offset={[0, 20]} theme='light-border' animation='perspective'>
                <button type="button" className="bookmark-btn" onClick={bookmarkRecipe}><FiBookmark /></button>
              </Tippy>
          : <Tippy placement="left" interactive={true} content={`Can't Bookmark`} offset={[0, 20]} theme='light-border' animation='perspective'>
              <button type="button" className="bookmark-btn disabled" disabled={true}><FiBookmark /></button>
            </Tippy>
        }
      </div>
    </div>
  )
}
