import axios from 'axios';
import {Box,Text,SimpleGrid,Image,Heading,Container,Button} from '@chakra-ui/react';
import {useState,useEffect} from 'react';
const Loading=()=>{
    return(
      <Container>
        <Image w='200px' h='200px' ml='180px'  src='https://reiwa.com.au/ux/reiwa/ux/images/pd/spinner.gif'/>
      </Container>
      
    )
   }
const Items=()=>{
    const [isLoading, setIsLoading] = useState(false)
    const [data,setData]=useState([]);
    const [page, setPage] = useState(1);
    const getData=()=>{
        setIsLoading(true)
        axios.get(`https://api-pathak-database.vercel.app/Items?_page=${page}&_limit=20`)
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
     

    return( isLoading ? ( <Loading/>) : (

    <Box>
        <Box>
         <Box>
     <Box boxShadow='md' display='flex' justifyContent='center' alignItems='center' w='100%' h='100px'>

        <Heading>Trending Brands</Heading>  </Box>
        <Box w='26%' bg=' #f1f6fd' mt='10px'>
        <SimpleGrid columns={4} spacing={1}>
            <Image src='https://img.gkbcdn.com/b/eleglide._p1_.jpg' alt='BrandLogo'/>
            <Image src='https://img.gkbcdn.com/b/Logo/roborock._p1_.jpg' alt='BrandLogo'/>
            <Image src='https://img.gkbcdn.com/b/engwe._p1_.jpg' alt='BrandLogo'/>
            <Image src='https://img.gkbcdn.com/b/sculpfun-6AlQjHhs._p1_.jpg'  alt='BrandLogo'/>
            <Image src='https://img.gkbcdn.com/b/Logo/tronsmart._p1_.jpg?v=788944783'  alt='BrandLogo'/>
            <Image src='https://img.gkbcdn.com/b/Logo/jimmy._p1_.jpg?v=-219567574' alt='BrandLogo'/>
            <Image src='https://img.gkbcdn.com/b/Logo/jimmy._p1_.jpg?v=-219567574' alt='BrandLogo'/>
            <Image src='https://img.gkbcdn.com/b/laserpecker._p1_.jpg' alt='BrandLogo'/>
            <Image src='https://img.gkbcdn.com/b/creality-3d._p1_.jpg' alt='BrandLogo'/>
            <Image src='https://img.gkbcdn.com/b/qidi-6vlr2Iht._p1_.jpg' alt='BrandLogo'/>
            <Image src='https://img.gkbcdn.com/b/Logo/BMAX._p1_.jpg' alt='BrandLogo'/>
            <Image src='https://img.gkbcdn.com/b/atomstack-6SNQ2kaP._p1_.jpg' alt='BrandLogo'/>
            <Image src='https://img.gkbcdn.com/b/ortur._p1_.jpg' alt='BrandLogo'/>
            <Image src='https://img.gkbcdn.com/b/mr-carve-6i2rJIX8._p1_.jpg' alt='BrandLogo'/>
            <Image src='https://img.gkbcdn.com/b/Logo/Roidmi._p1_.jpg' alt='BrandLogo'/>
            <Image src='https://img.gkbcdn.com/b/flashfish-6DPuf6vS._p1_.jpg' alt='BrandLogo'/>
            <Image src='https://img.gkbcdn.com/b/inse-6ILfjShE._p1_.jpg' alt='BrandLogo'/>
            <Image src='https://img.gkbcdn.com/b/proscenic-6HykTHuh._p1_.jpg' alt='BrandLogo'/>
            <Image src='https://img.gkbcdn.com/b/zendure-6eh27neh._p1_.jpg' alt='BrandLogo'/>
            <Image src='https://img.gkbcdn.com/b/bezior._p1_.jpg' alt='BrandLogo'/>          
        </SimpleGrid></Box>
        
      
      
      
      
      <Box align='right' bg=' #f1f6fd' mt='-250px'>
     <SimpleGrid columns={4} spacing={3} w='70%'  mr='40px'>
           {data?.data?.map((el) => (
          <Box
           className='eachBox'
            mt='20px'
            align='left'
            key={el.ID}
            style={{
              background:'white',
              fontFamily: "Open Sans",
              display: "flex",
              padding:'10px',
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Image src={el.PicturePath}></Image>
            <Text ml='-150px' display='flex' justifyContent='center' alignItems='center' bg='red' borderRadius='10px' color='white' fontSize='xs'  width='55px'>{el.Discount}% OFF</Text>
            <Box
          mt='1'
          as='h4'
          
          lineHeight='tight'
          noOfLines={2}
        >
         {el.Name}
        </Box>
             <Text ml='-150px' fontWeight='600' fontSize='large'>{el.SalePrice}</Text>
             <Text ml='-150px' fontSize='large'>{el.CsSalesPrice}</Text>
          </Box>
        ))}
    </SimpleGrid>
    </Box>
    <Box mb='10px'bg=' #f1f6fd' padding='30px'>
    <Button   colorScheme='teal' variant='outline' disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </Button>
      <Button colorScheme='blue' m='30px'>{page}</Button>
      <Button colorScheme='teal' variant='outline' disabled={page >= 9} onClick={() => setPage(page + 1)}>
        NEXT
      </Button>
    </Box>
</Box>
    </Box>
    </Box>
    )
    )
}
export default Items;



