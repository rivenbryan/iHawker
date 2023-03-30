/**
 * React component that displays the search title in the landing page.
 *
 * @component
 * @returns {JSX.Element} The React component.
 */
import { Typography,Box } from "@mui/material"

const SearchTitle = () => {
    return (
            <Box sx={{marginBottom: 3}}>
                <Typography variant="h3" sx={{fontWeight: 'medium', marginBottom: 1}} color="primary">It's time to treat yourself.</Typography>
                <Typography sx={{fontWeight: 'medium'}}>Are you hungry? Search your favourite food now!</Typography>
            </Box>
    )
}

export default SearchTitle
