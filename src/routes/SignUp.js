import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SignUpImg from "../assets/1.agra.jpg";
import { FirebaseProvider } from "../configure";
import { Footer } from "../components/Footer";
import { SignUpForm } from "../components/SignUpForm";
function SignUp() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={SignUpImg}
        title="Sign Up"
        btnClass="hide"
      />
      <FirebaseProvider>
        <SignUpForm />
      </FirebaseProvider>

      <Footer />
    </>
  );
}

export default SignUp;
