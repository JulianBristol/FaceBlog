import { Button, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../../darkModeState';
import makeStyles from "./styles";

const PostDescriptions = ({texts}) => {
  const darkMode = useRecoilValue(darkModeState);
  const classes = makeStyles();
  const [needsTruncation, setNeedsTruncation] = useState(false);
  const [truncated, setTruncated] = useState(true);

  // Adjust this value to match line height
  const lineHeight = 1.2;
  const textRef = useRef(null);
  const maxLines = 3;
  const text = texts?.join('\n\n');
  
  useEffect(() => {
    const handleResize = () => {
      const textElement = textRef.current;
      if (textElement && textElement.clientHeight > lineHeight * maxLines) {
        setTruncated(true);
      } else {
        setTruncated(false);
      }
      setNeedsTruncation(textElement && textElement.clientHeight > 60);
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [text, maxLines, needsTruncation,]);

   useEffect(() => {
    const textElement = textRef.current;
    setNeedsTruncation(textElement && textElement.clientHeight > 60);
  },[])

  const toggleTruncate = () => {
    setTruncated(!truncated);
  };

  return (
    <>
      <div style={{ maxHeight: `${truncated ? lineHeight * maxLines : 25}rem`, overflow: `${truncated ? "hidden" : "auto"}`, padding: `${truncated ? "0px 0px" : "0px 5px"}`, }}>
        <Typography ref={textRef} dangerouslySetInnerHTML={{ __html: text }} sx={{ whiteSpace: 'pre-line', lineHeight: '1.2rem', padding: '0px', '& a': {color: '#1976d2', textDecoration: 'none'}  }}></Typography>
      </div>
      <Button onClick={toggleTruncate} className={`${classes.SeeMore} ${darkMode ? classes.darkMode_SeeMore : ''}`} sx={{ display: `${needsTruncation ? 'block' : 'none' }` }}>
        {truncated ? "See More" : "See Less"}
      </Button>
    </>
  );
}

export default PostDescriptions