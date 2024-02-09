import '../App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { CardHeader } from '@mui/material';

const MoreInfo = ({title, body, clear}) => {
  return (
    <Box margin={2}>
        <Card variant="outlined">
        <CardHeader title={title} action={<IconButton onClick={clear}>
                          <CloseIcon />
          </IconButton>}></CardHeader>
        <CardContent>
      <Typography color="text.secondary" variant="body1">
        {body}
        </Typography>
    </CardContent>
        </Card>
    </Box>
  );
}

export default MoreInfo;