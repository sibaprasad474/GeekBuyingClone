
import axios from 'axios';
import {Button,Box,Text,SimpleGrid,Image,Heading,Container} from '@chakra-ui/react';
import {useState,useEffect} from 'react';
const Loading=()=>{
    return(
      <Container>
        <Image w='200px' h='200px' ml='180px'  src='https://reiwa.com.au/ux/reiwa/ux/images/pd/spinner.gif'/>
      </Container>
      
    )
   }
const Categories=()=>{
    const [isLoading, setIsLoading] = useState(false)
    const [data,setData]=useState([]);
    const [page, setPage] = useState(1);
    const getData=()=>{
        setIsLoading(true)
        axios.get(`http://localhost:5050/Categories?_page=${page}&_limit=20`)
        .then((res)=>{
            setData(res)
            setIsLoading(false)
          console.log(res.data)
        })
        .catch((error)=>{
            setIsLoading(false)
            console.log(error)
        })
      }
      useEffect(()=>{
        getData(page);
      },[page])
     

    return(isLoading ? ( <Loading/>) : (
        <Box>
        <Box boxShadow='md' display='flex' justifyContent='center' alignItems='center' w='100%' h='100px'><Heading>ADMIN PAGE TO ADD DATA</Heading></Box>
         <Box align='right' bg=' #f1f6fd' >
        <SimpleGrid columns={5} spacing={6} w='90%'  mr='40px'>
              {data?.data?.map((el) => (
             <Box
              className='eachBox'
               mt='20px'
               align='left'
               key={el.ProductId}
               style={{
                 background:'white',
                 fontFamily: "Open Sans",
                 display: "flex",
                 padding:'10px',
                 flexDirection: "column",
                 alignItems: "center"
               }}
             >
          
            <Image src={el.PicPath}></Image>
            <Box
          mt='1'
          
          as='h4'
          lineHeight='tight'
          noOfLines={2}
        >
       {el.ProductionName}
        </Box>
            
             <Text ml='-150px' fontWeight='600' fontSize='large'>{el.SalePrice}</Text>
             <Text ml='-150px' fontSize='large'>{el.CSSalesPrice}</Text>
          </Box>
        ))}
    </SimpleGrid>
    </Box>
    <Box mb='10px'bg=' #f1f6fd' padding='30px'>
    <Button   colorScheme='teal' variant='outline' disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </Button>
      <Button colorScheme='blue' m='30px'>{page}</Button>
      <Button colorScheme='teal' variant='outline' disabled={page >= 2} onClick={() => setPage(page + 1)}>
        NEXT
      </Button>
    </Box>
</Box>
  
    )
 )
}
export default Categories;



