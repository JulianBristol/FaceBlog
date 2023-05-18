import { Button } from '@mui/material';
import React, { useState } from 'react'
import TextTruncate from 'react-text-truncate';
import makeStyles from "./styles";

const PostDescriptions = ({texts}) => {
  const classes = makeStyles();

    const [truncated, setTruncated] = useState(true);
    const toggleTruncate = () => {
      setTruncated(!truncated);
    };

    const text = texts.join('\n\n');

  return (
    <>
      <div>
        <TextTruncate
          containerClassName={classes.textTruncate}
          line={truncated ? 4 : 9999999999}
          element="p"
          truncateText="…"
          text={text}
          textTruncateChild={<span><br/><Button onClick={toggleTruncate} sx={{ position: 'relative', left: 'calc(100% - 100px)' }}>
                  {truncated ? "See More" : "See Less"}
                  </Button></span>}
        />
      </div>
      <Button onClick={toggleTruncate} sx={{ position: 'relative', left: 'calc(100% - 100px)', display: `${truncated ? 'none' : 'block' }` }}>
        {truncated ? "See More" : "See Less"}
      </Button>
    </>
  )
}

export default PostDescriptions




/* 


                  textTruncateChild={<Button onClick={toggleTruncate} sx={{ position: 'relative', left: 'calc(100% - 100px)' }}>
                  {truncated ? "See More" : "See Less"}
                  </Button>}
                  />
                  <Button onClick={toggleTruncate} sx={{ position: 'relative', left: 'calc(100% - 100px)', display: `${truncated ? 'none' : 'block' }` }}>
                  {truncated ? "See More" : "See Less"}
                  </Button>

*/