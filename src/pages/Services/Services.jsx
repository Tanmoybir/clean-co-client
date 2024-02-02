import Container from "../../components/UI/Container";
import Header from "../../components/UI/Header";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import ServiceCard from "../../components/ServiceCard";
import { useState } from "react";
import { capitalizeWords } from "../../util/Capitalize";

const categories = [
    'Specialized Cleaners',
    'General Purpose',
    'Glass and Mirrors',
    'Carpet Care',
    'Bathroom Care',
    'Floor Care',
    'Appliance Care',
    'Kitchen Cleaning',
    'Dish Care',
    'Laundry Care'

]

const Services = () => {
    const axios = useAxios();
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [page, setPage] = useState(1);

    console.log(page);
    const getServices = async () => {
        const res = await axios.get(`/services?category=${category}&sortField=price&sortOrder=${price}&page=${page}&limit=${limit}`)
        return res
    }
    const { data: services, isLoading, isError, error } = useQuery({
        queryKey: ['service', price, category,page],
        queryFn: getServices
    })

    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1)
        }

    }

    const handleNext = () => {
        if (page < totalPage) {
            setPage(page + 1)
        }

    }

    const limit = 9
    const totalPage = Math.ceil(services?.data?.total / limit);
    // console.log(totalPage);

    if (isError) {
        return <p>Something went wrong: {error}</p>
    }
    return (
        <Container>
            <div className="mt-10">
                <Header title="Services">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
                    nobis excepturi delectus, ab id provident, voluptas iste ullam
                    repellendus animi eos perspiciatis cumque. Quod sit laboriosam
                    deleniti atque explicabo esse.
                </Header>
            </div>
            {/*  */}
            <div>
                <div className="my-12 flex justify-end items-center border-2 border-primary rounded-2xl p-5 gap-5">
                    <h1 className="flex-1 text-xl font-semibold">Over 20 services to choose from</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select className="input input-bordered" onChange={(e) => setCategory(e.target.value)}>
                            <option disabled selected>Choose one</option>
                            {
                                categories.map((item) => (
                                    <option key={item} value={item}>
                                        {capitalizeWords(item)}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <select className="input input-bordered" onChange={(e) => setPrice(e.target.value)}>
                            <option disabled selected>
                                Choose one
                            </option>
                            <option value='asc'>From low to high</option>
                            <option value='desc'>From high to low  </option>
                        </select>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="mb-10">
                {isLoading ? <div className="w-20 h-20  border-l-2 border-green-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-16 h-16  border-b-2 border-indigo-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-10 h-10  border-r-2  border-sky-500 rounded-full animate-[spin_1.8s_linear_infinite]"></div></div></div> :
                    <div className="grid grid-cols-3 gap-10">
                        {/* Service Cards goes here */}
                        {
                            services?.data?.result.map(service => <ServiceCard key={service._id} service={service} />)
                        }
                    </div>}
            </div>
            <div className="mb-64 flex justify-end">
                {isLoading ? <div className="w-20 h-20  border-l-2 border-green-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-16 h-16  border-b-2 border-indigo-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-10 h-10  border-r-2  border-sky-500 rounded-full animate-[spin_1.8s_linear_infinite]"></div></div></div> :
                    <div className="join border-2 border-primary">
                        <button onClick={handlePrevious} className="join-item btn btn-ghost">«</button>
                        {
                            Array(totalPage)
                                .fill(0)
                                .map((item, index) => {
                                    const pageCount = index + 1
                                    return (<button key={pageCount} onClick={() => setPage(pageCount)}
                                        className={`${pageCount === page ? "join-item btn btn-primary" : "join-item btn btn-ghost"}`}>{pageCount}</button>)
                                })
                        }
                        <button onClick={handleNext} className="join-item btn btn-ghost">»</button>
                    </div>}
            </div>
        </Container>

    );
};

export default Services;