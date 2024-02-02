import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { auth } from "../../config/firebase.config";
import Container from "../../components/UI/Container";
import toast from 'react-hot-toast';

const Orders = () => {
    const axios = useAxios()
    const queryClient = useQueryClient()


    const { data: bookings, isLoading, isError, error } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const email = auth.currentUser.email
            const res = await axios.get(`/user/booking?email=${email}`)
            return res
        }
    })

    // console.log(bookings);
    const { mutate } = useMutation({
        mutationKey: ['booking'],
        mutationFn: (id) => {
            return axios.delete(`/user/cancel-booking/${id}`)
        },
        onSuccess: () => {
            toast.success('Deleted Successfully')
            queryClient.invalidateQueries({ queryKey: ['booking'] })
        }
    })
    if (isError) {
        return <p>Something went wrong: {error}</p>
    }

    return (
        <Container>
            {isLoading ? <h1>loading...</h1> :
                <div className="">
                    {
                        bookings?.data?.map(item => (
                            <div key={item._id} className="border-2 my-10">
                                <h1>{item.service}</h1>
                                <button onClick={() => mutate(item._id)} className="btn btn-square">Cancel</button>
                            </div>
                        ))
                    }
                </div>}
        </Container>
    );
};

export default Orders;