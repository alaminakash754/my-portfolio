

const Footer = () => {
    let year = new Date().getFullYear()
    return (
        <div className="w-[650px]">
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright ©  {year}- All Right Reserved </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;