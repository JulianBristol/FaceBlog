import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import TextTruncate from 'react-text-truncate';

/* const Test = ({text}) => {
    return (
        <>
        {text.map((item, key) => (
            <Typography key={key} variant="body2" color="text.secondary" style={{ marginTop: '20px' }}>
                {text[item]}
            </Typography>
        ))}
        </>
    )} */
const PostDescriptions = ({texts}) => {
    const [truncated, setTruncated] = useState(true);
    /* const test = () => {
        <>
        {texts.map((text, key) => (
                <Typography key={key} variant="body2" color="text.secondary" style={{ marginTop: '20px' }}>
                    {text}
                    {console.log(text)}
                </Typography>
            ))}
            </>
    } */

    const test = () => {
        return (
        <>
        <p>{texts}</p>
        </>
    )}
    const toggleTruncate = () => {
      setTruncated(!truncated);
    };
  return (
    <>
      <TextTruncate
                  line={truncated ? 4 : 9999999999}
                  element="span"
                  truncateText="…"
                  textElement={test}
                  textTruncateChild={<Button onClick={toggleTruncate} sx={{ position: 'relative', left: 'calc(100% - 100px)' }}>
                  {truncated ? "See More" : "See Less"}
                  </Button>}
                  />
                  <Button onClick={toggleTruncate} sx={{ position: 'relative', left: 'calc(100% - 100px)', display: `${truncated ? 'none' : 'block' }` }}>
                  {truncated ? "See More" : "See Less"}
                  </Button>
    </>
  )
}

export default PostDescriptions
