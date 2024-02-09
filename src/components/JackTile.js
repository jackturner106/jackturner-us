import '../App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

const JackTile = ({title, body, onClick}) => {
  return (
    <Box onClick={onClick} margin={2}>
        <Card variant="outlined">
        <CardContent>
      <Typography variant='h5' color="text.primary">
        {title}
      </Typography>
      <Typography color="text.secondary" variant="body1">
        {body}
        </Typography>
    </CardContent>
        </Card>
    </Box>
  );
}

export default JackTile;