import Layout from "../static/components/layout";

// const Index = () => {
//     return (
        
//     );
// }
export default function Index({Index: {name, url}}) {
    return(
        <Layout>
            <div>
                <h1>Welcome to Next Application</h1>
                <img src={url} alt={'Mem ${name'} />
            </div>
        </Layout>
    )
}
export async function getServerSideProps(context) {
    const response = await fetch('https://api.imgflip.com/get_memes');
    const {data, success} = await response.json();

    if(!success){
        return {
            redirect: {
                destination: '/',
                permament: false,
            }
        }
    }

    const mem = data.memes.find(mem => mem.id === id);

    return{
    props: {
        mem,
    }
}
}


// export default Index;