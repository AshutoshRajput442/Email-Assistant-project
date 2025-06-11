// import { useState } from 'react'
// import './App.css'
// import { Box, Button, CircularProgress, Container, FormControl, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
// import axios from 'axios';

// function App() {
//   const [emailContent, setEmailContent] = useState('');
//   const [tone, setTone] = useState('');
//   const [generatedReply, setGeneratedReply] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       const response = await axios.post("http://localhost:8080/api/email/generate", {
//        emailContent,
//        tone 
//       });
//       setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
//     } catch (error) {
//       setError('Failed to generate eamil reply. Please try again');
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container maxWidth="md" sx={{py:4}}>
//       <Typography variant='h3' component="h1" gutterBottom>
//         Email Reply Generator
//       </Typography>

//       <Box sx={{ mx: 3 }}>
//         <TextField 
//           fullWidth
//           multiline
//           rows={6}
//           variant='outlined'
//           label="Original Email Content"
//           value={emailContent || ''}
//           onChange={(e) => setEmailContent(e.target.value)}
//           sx={{ mb:2 }}/>

//           <FormControl fullWidth sx={{ mb:2 }}>
//             <InputLabel>Tone (Optional)</InputLabel>
//             <Select
//               value={tone || ''}
//               label={"Tone (Optional)"}
//               onChange={(e) => setTone(e.target.value)}>
//                 <MenuItem value="">None</MenuItem>
//                 <MenuItem value="professional">Professional</MenuItem>
//                 <MenuItem value="casual">Casual</MenuItem>
//                 <MenuItem value="friendly">Friendly</MenuItem>
//             </Select>
//           </FormControl>

//           <Button
//             variant='contained'
//             onClick={handleSubmit}
//             disabled={!emailContent || loading}
//             fullWidth>
//             {loading ? <CircularProgress size={24}/> : "Generate Reply"}
//           </Button>
//       </Box>

//       {error && (
//         <Typography color='error' sx={{ mb:2 }}>
//           {error}
//         </Typography>
//       )}

//       {generatedReply && (
//        <Box sx={{ mt: 3}}>
//           <Typography variant='h6' gutterBottom>
//             Generated Reply:
//           </Typography>
//           <TextField
//             fullWidth
//             multiline
//             rows={6}
//             variant='outlined'
//             value={generatedReply || ''}
//             inputProps={{ readOnly: true }}/>
        
//         <Button
//           variant='outlined'
//           sx={{ mt: 2 }}
//           onClick={() => navigator.clipboard.writeText(generatedReply)}>
//             Copy to Clipboard
//         </Button>
//        </Box> 
//       )}
//     </Container>
//   )
// }

// export default App


import { useState } from 'react';
import './App.css';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:8080/api/email/generate', {
        emailContent,
        tone,
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError('Failed to generate email reply. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={4} sx={{ p: 4, bgcolor: '#1e1e2f', borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom color="#f0f0f0">
          ✉️ Smart Email Reply Assistant
        </Typography>

        <TextField
          fullWidth
          multiline
          rows={6}
          variant="filled"
          label="Paste your email here..."
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{ mb: 3 }}
          InputProps={{ sx: { backgroundColor: '#2b2b3d', color: '#fff' } }}
          InputLabelProps={{ sx: { color: '#aaa' } }}
        />

        <FormControl fullWidth variant="filled" sx={{ mb: 3 }}>
          <InputLabel sx={{ color: '#aaa' }}>Tone (Optional)</InputLabel>
          <Select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            sx={{ backgroundColor: '#2b2b3d', color: '#fff' }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          disabled={!emailContent || loading}
          sx={{
            bgcolor: '#0077cc',
            '&:hover': { bgcolor: '#005fa3' },
            color: '#fff',
          }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Generate Reply'}
        </Button>

        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}

        {generatedReply && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" color="#f0f0f0" gutterBottom>
              Generated Reply:
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={6}
              variant="filled"
              value={generatedReply}
              InputProps={{ readOnly: true, sx: { backgroundColor: '#2b2b3d', color: '#fff' } }}
            />
            <Button
              variant="outlined"
              sx={{ mt: 2, color: '#fff', borderColor: '#888', '&:hover': { borderColor: '#fff' } }}
              onClick={() => navigator.clipboard.writeText(generatedReply)}
            >
              Copy to Clipboard
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default App;


// import { useState } from 'react';
// import './App.css';
// import {
//   Box,
//   Button,
//   CircularProgress,
//   Container,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
//   Typography
// } from '@mui/material';
// import axios from 'axios';

// function App() {
//   const [emailContent, setEmailContent] = useState('');
//   const [tone, setTone] = useState('');
//   const [generatedReply, setGeneratedReply] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       const response = await axios.post("http://localhost:8080/api/email/generate", {
//         emailContent,
//         tone
//       });
//       setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
//     } catch (error) {
//       setError('Failed to generate email reply. Please try again.');
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container maxWidth="md" sx={{ py: 4 }}>
//       <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#ffffff' }}>
//         Email Reply Generator
//       </Typography>

//       <Box sx={{ background: '#1e1e2f', p: 4, borderRadius: 3 }}>
//         <TextField
//           fullWidth
//           multiline
//           rows={6}
//           variant="filled"
//           label="Paste your email here..."
//           value={emailContent}
//           onChange={(e) => setEmailContent(e.target.value)}
//           sx={{
//             mb: 3,
//             '& .MuiFilledInput-root': {
//               backgroundColor: '#2b2b3d',
//               color: '#fff',
//             },
//             '& .MuiFilledInput-root.Mui-focused': {
//               backgroundColor: '#2b2b3d',
//             },
//             '& .MuiFilledInput-underline:after': {
//               borderBottomColor: 'transparent',
//             },
//             '& label.Mui-focused': {
//               color: '#aaa',
//             },
//           }}
//           InputLabelProps={{ sx: { color: '#aaa' } }}
//         />

//         <FormControl fullWidth variant="filled" sx={{ mb: 3 }}>
//           <InputLabel sx={{ color: '#aaa' }}>Tone (Optional)</InputLabel>
//           <Select
//             value={tone}
//             onChange={(e) => setTone(e.target.value)}
//             sx={{
//               backgroundColor: '#2b2b3d',
//               color: '#fff',
//               '& .MuiSelect-icon': { color: '#aaa' },
//               '&:focus': { backgroundColor: '#2b2b3d' },
//               '& .Mui-focused': { borderColor: 'transparent' },
//             }}
//           >
//             <MenuItem value="">None</MenuItem>
//             <MenuItem value="professional">Professional</MenuItem>
//             <MenuItem value="casual">Casual</MenuItem>
//             <MenuItem value="friendly">Friendly</MenuItem>
//           </Select>
//         </FormControl>

//         <Button
//           variant="contained"
//           fullWidth
//           onClick={handleSubmit}
//           disabled={!emailContent || loading}
//           sx={{
//             bgcolor: '#28a745',
//             '&:hover': { bgcolor: '#218838' },
//             '&:disabled': { bgcolor: '#6c757d' },
//             color: '#fff',
//             fontWeight: 'bold',
//           }}
//         >
//           {loading ? <CircularProgress size={24} color="inherit" /> : 'Generate Reply'}
//         </Button>

//         {error && (
//           <Typography color="error" sx={{ mt: 2 }}>
//             {error}
//           </Typography>
//         )}

//         {generatedReply && (
//           <Box sx={{ mt: 4 }}>
//             <Typography variant="h6" sx={{ color: '#ffffff' }} gutterBottom>
//               Generated Reply:
//             </Typography>
//             <TextField
//               fullWidth
//               multiline
//               rows={6}
//               variant="filled"
//               value={generatedReply}
//               inputProps={{ readOnly: true }}
//               sx={{
//                 '& .MuiFilledInput-root': {
//                   backgroundColor: '#2b2b3d',
//                   color: '#fff',
//                 },
//               }}
//             />
//             <Button
//               variant="outlined"
//               sx={{
//                 mt: 2,
//                 borderColor: '#28a745',
//                 color: '#28a745',
//                 '&:hover': {
//                   borderColor: '#218838',
//                   backgroundColor: '#1a3221',
//                 },
//               }}
//               onClick={() => navigator.clipboard.writeText(generatedReply)}
//             >
//               Copy to Clipboard
//             </Button>
//           </Box>
//         )}
//       </Box>
//     </Container>
//   );
// }

// export default App;
