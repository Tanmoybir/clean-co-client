import PropTypes from 'prop-types'; 

const Container = ({children}) => {
    return (
        <div className='max-w-screen-xl mx-auto w-full'>
            {children}
        </div>
    );
};

export default Container;

Container.propTypes = {
    children: PropTypes.node,
}