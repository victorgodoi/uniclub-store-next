import classNames from 'classnames'

const Component = ({ children, className }) => {
    return (
        <div className={classNames('flex justify-center w-full', className)}>
            <div className='flex justify-center max-w-[1300px]'>
                {children}
            </div>
        </div>
    )
}

export default Component