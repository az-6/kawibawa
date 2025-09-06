"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Heart,
  Shield,
  Leaf,
  Award,
  Users,
  Phone,
  Mail,
  MapPin,
  Star,
  Play,
  CheckCircle,
  Droplets,
  Zap,
  Activity,
  MessageCircle,
  Instagram,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Eye,
  Target,
  Menu,
  X,
} from "lucide-react";

export default function KawibawaWebsite() {
  const [activeSection, setActiveSection] = useState("home");
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle header visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Close mobile menu on scroll
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }

      // Show header when at top or scrolling up, hide when scrolling down
      if (currentScrollY === 0) {
        setIsHeaderVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true); // Scrolling up
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false); // Scrolling down
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  // Auto-slide functionality for Step 1
  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentSlide1((prev) => (prev + 1) % 2);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval1);
  }, []);

  // Auto-slide functionality for Step 2
  useEffect(() => {
    const interval2 = setInterval(() => {
      setCurrentSlide2((prev) => (prev + 1) % 2);
    }, 5500); // Slightly different timing to avoid sync

    return () => clearInterval(interval2);
  }, []);

  // Update slider transform when currentSlide changes
  useEffect(() => {
    const slider = document.getElementById("slider-step1");
    if (slider) {
      slider.style.transform = `translateX(-${currentSlide1 * 100}%)`;
    }
  }, [currentSlide1]);

  useEffect(() => {
    const slider = document.getElementById("slider-step2");
    if (slider) {
      slider.style.transform = `translateX(-${currentSlide2 * 100}%)`;
    }
  }, [currentSlide2]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-amber-100 z-50 transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image src="/logobg.png" alt="Logo" width={45} height={45} />
              <span className="text-2xl font-bold text-amber-900">
                PT WIBAWA SEJAHTERA ABADI
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-amber-800 hover:text-amber-600 font-medium"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection("story")}
                className="text-amber-800 hover:text-amber-600 font-medium"
              >
                Kisah Kami
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-amber-800 hover:text-amber-600 font-medium"
              >
                Proses Panen
              </button>
              <button
                onClick={() => scrollToSection("advantages")}
                className="text-amber-800 hover:text-amber-600 font-medium"
              >
                Keunggulan
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-amber-800 hover:text-amber-600 font-medium"
              >
                Produk
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-amber-800 hover:text-amber-600 font-medium"
              >
                Kontak
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-amber-800 hover:text-amber-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-amber-100">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => {
                    scrollToSection("home");
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-amber-800 hover:text-amber-600 font-medium text-left"
                >
                  Beranda
                </button>
                <button
                  onClick={() => {
                    scrollToSection("story");
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-amber-800 hover:text-amber-600 font-medium text-left"
                >
                  Kisah Kami
                </button>
                <button
                  onClick={() => {
                    scrollToSection("process");
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-amber-800 hover:text-amber-600 font-medium text-left"
                >
                  Proses Panen
                </button>
                <button
                  onClick={() => {
                    scrollToSection("advantages");
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-amber-800 hover:text-amber-600 font-medium text-left"
                >
                  Keunggulan
                </button>
                <button
                  onClick={() => {
                    scrollToSection("products");
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-amber-800 hover:text-amber-600 font-medium text-left"
                >
                  Produk
                </button>
                <button
                  onClick={() => {
                    scrollToSection("contact");
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-amber-800 hover:text-amber-600 font-medium text-left"
                >
                  Kontak
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 pb-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
                  KAWIBAWA
                </h1>
                <p className="text-2xl lg:text-3xl text-amber-700 font-light">
                  Alam Sehat, Anda Sehat
                </p>
                <p className="text-lg text-amber-600 leading-relaxed">
                  Kawibawa adalah brand madu trigona premium yang dipanen dengan
                  metode lestari, kaya akan nutrisi alami untuk mendukung
                  kesehatan Anda. Dikelola oleh mahasiswa inovatif IPB
                  University, Kawibawa menghadirkan madu berkualitas tinggi yang
                  otentik, sehat, dan ramah lingkungan
                </p>
              </div>

              {/* Value Propositions */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-lg border border-amber-100">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-amber-800">
                    100% Murni
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-lg border border-amber-100">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-amber-800">
                    Kaya Nutrisi
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-lg border border-amber-100">
                  <Leaf className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-amber-800">
                    Rasa Khas "Asam"
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-lg border border-amber-100">
                  <Users className="w-6 h-6 text-purple-600" />
                  <span className="font-semibold text-amber-800">
                    Inovasi Mahasiswa
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg"
                  onClick={() => scrollToSection("products")}
                >
                  <Image
                    src="/logobg.png"
                    alt="Logo"
                    width={20}
                    height={20}
                    className="mr-2 rounded"
                  />
                  Lihat Produk
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg bg-transparent"
                  onClick={() => scrollToSection("process")}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Lihat Proses Panen
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/ligo.jpg"
                  alt="Madu Trigona KAWIBAWA"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-400 rounded-full opacity-20" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-400 rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        id="story"
        className="py-20 bg-gradient-to-b from-white to-amber-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
                Kisah KAWIBAWA
              </h2>
              <p className="text-xl text-amber-700 leading-relaxed">
                Sebelum Kawibawa terlahir, pada 2021, saat kami mencoba
                membudidayakan satu koloni lebah trigona Leviceps yang diambil
                dari hutan tanpa modal sepeser pun. Dengan kesabaran, pada 2023
                koloni berkembang menjadi 42, meski fokus masih pada
                pembudidayaan. Oktober 2023 menjadi awal mula Kawibawa resmi
                terbentuk dan mulai memperkenalkan madu trigona murni ke pasar.
                Tahun 2024, Kawibawa lolos program P2MW tahap awal dan
                memperoleh dukungan yang memungkinkan kami memperluas jangkauan
                pasar, meningkatkan produktivitas, serta mulai memberdayakan
                petani gurem agar ikut tumbuh bersama.
              </p>
              <p className="text-xl text-amber-700 leading-relaxed mt-4"></p>
              <p className="text-xl text-amber-700 leading-relaxed">
                Kini, 2025, Kawibawa kembali lolos tahap berkembang P2MW,
                menandai konsistensi kami dalam membangun bisnis yang
                berkelanjutan. Nama Kawibawa berasal dari kata "ka" yang diambil
                dari bahasa Sunda yang artinya "ke" atau "menuju" dan “wibawa”
                yang melambangkan kekuatan, keteguhan, dan kebermaknaan.
                Filosofi ini menegaskan komitmen kami dari satu langkah
                sederhana tanpa modal, lahirlah kekuatan besar yang
                berkelanjutan. Setiap tetes madu trigona bukan hanya sumber
                kesehatan, tetapi juga wujud harapan bagi petani kecil,
                mahasiswa, dan masyarakat yang tumbuh bersama.
              </p>
            </div>

            {/* Vision, Mission & Values */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-amber-900 mb-2">
                    Visi, Misi dan Nilai Inti
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto lg:mx-0 mb-8"></div>
                </div>

                {/* Visi */}
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-blue-900">Visi</h4>
                    </div>
                    <p className="text-blue-800 leading-relaxed">
                      Menjadi brand madu trigona berkelanjutan terkemuka di
                      Indonesia yang memberikan kontribusi nyata bagi kesehatan,
                      sosial, dan kelestarian lingkungan.
                    </p>
                  </CardContent>
                </Card>

                {/* Misi */}
                <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-green-900">Misi</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-lg shadow-sm border border-green-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            1
                          </div>
                          <p className="font-bold text-green-900">
                            Kualitas Premium
                          </p>
                        </div>
                        <p className="text-sm text-green-800">
                          Menyediakan produk madu trigona murni dengan standar
                          kualitas premium.
                        </p>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm border border-green-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            2
                          </div>
                          <p className="font-bold text-green-900">
                            Edukasi Kesehatan
                          </p>
                        </div>
                        <p className="text-sm text-green-800">
                          Mengedukasi masyarakat tentang gaya hidup sehat
                          berbasis produk alami.
                        </p>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm border border-green-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            3
                          </div>
                          <p className="font-bold text-green-900">
                            Ramah Lingkungan
                          </p>
                        </div>
                        <p className="text-sm text-green-800">
                          Mengembangkan praktik budidaya ramah lingkungan untuk
                          menjaga keseimbangan ekosistem.
                        </p>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm border border-green-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            4
                          </div>
                          <p className="font-bold text-green-900">
                            Pemberdayaan
                          </p>
                        </div>
                        <p className="text-sm text-green-800">
                          Meningkatkan kesejahteraan peternak lokal melalui
                          pemberdayaan dan kerja sama berkelanjutan.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Nilai Inti */}
                <Card className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-amber-900">
                        Nilai Inti
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-lg shadow-sm border border-amber-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-2 mb-2">
                          <Star className="w-5 h-5 text-amber-600" />
                          <p className="font-bold text-amber-900">Kualitas</p>
                        </div>
                        <p className="text-sm text-amber-700">
                          menghadirkan madu murni terbaik
                        </p>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm border border-amber-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-2 mb-2">
                          <Leaf className="w-5 h-5 text-green-600" />
                          <p className="font-bold text-amber-900">
                            Keberlanjutan
                          </p>
                        </div>
                        <p className="text-sm text-amber-700">
                          melestarikan ekosistem dan lingkungan
                        </p>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm border border-amber-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-2 mb-2">
                          <Users className="w-5 h-5 text-blue-600" />
                          <p className="font-bold text-amber-900">Kolaborasi</p>
                        </div>
                        <p className="text-sm text-amber-700">
                          bersinergi dengan peternak dan komunitas lokal
                        </p>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm border border-amber-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-2 mb-2">
                          <Shield className="w-5 h-5 text-red-600" />
                          <p className="font-bold text-amber-900">Kesehatan</p>
                        </div>
                        <p className="text-sm text-amber-700">
                          memberi manfaat nyata bagi tubuh dan lingkungan
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              {/* Team Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="tim.jpg"
                    alt="Tim KAWIBAWA di Peternakan"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-amber-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-400 rounded-full opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDGs Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
              KAWIBAWA Mendukung SDGs
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
              Kawibawa berkomitmen mendukung pencapaian Sustainable Development
              Goals (SDGs) melalui praktik bisnis berkelanjutan yang memberikan
              dampak positif bagi kesehatan, ekonomi, dan lingkungan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* SDG 3: Good Health and Well-being */}
            <Card className="p-6 border-blue-100 hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-amber-900 mb-3">
                  Kesehatan dan Kesejahteraan
                </h3>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Menyediakan produk madu trigona murni yang kaya nutrisi untuk
                  mendukung gaya hidup sehat dan meningkatkan kualitas kesehatan
                  masyarakat.
                </p>
              </CardContent>
            </Card>

            {/* SDG 8: Decent Work and Economic Growth */}
            <Card className="p-6 border-orange-100 hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  8
                </div>
                <h3 className="text-lg font-bold text-amber-900 mb-3">
                  Pekerjaan Layak dan Pertumbuhan Ekonomi
                </h3>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Memberdayakan petani lokal dan menciptakan lapangan kerja
                  berkelanjutan melalui pengembangan usaha madu trigona yang
                  inovatif.
                </p>
              </CardContent>
            </Card>

            {/* SDG 12: Responsible Consumption and Production */}
            <Card className="p-6 border-green-100 hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  12
                </div>
                <h3 className="text-lg font-bold text-amber-900 mb-3">
                  Konsumsi dan Produksi Bertanggung Jawab
                </h3>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Menerapkan praktik produksi berkelanjutan dengan metode panen
                  lestari yang menjaga kualitas produk tanpa merusak ekosistem.
                </p>
              </CardContent>
            </Card>

            {/* SDG 15: Life on Land */}
            <Card className="p-6 border-teal-100 hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-teal-600" />
                </div>
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  15
                </div>
                <h3 className="text-lg font-bold text-amber-900 mb-3">
                  Kehidupan di Darat
                </h3>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Melestarikan ekosistem melalui budidaya lebah trigona yang
                  ramah lingkungan dan mendukung biodiversitas flora lokal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Harvest Process Section */}
      <section
        id="process"
        className="py-20 bg-gradient-to-b from-amber-50 to-orange-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
              Proses Panen Kami
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
              Transparansi adalah kunci kepercayaan. Saksikan setiap langkah
              proses panen madu trigona KAWIBAWA yang higienis, lestari, dan
              menjaga kualitas premium.
            </p>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-3xl font-bold text-amber-900">
                    Pemeliharaan Koloni
                  </h3>
                </div>
                <p className="text-lg text-amber-700 leading-relaxed">
                  Peternakan lebah trigona kami dikelola secara alami di
                  lingkungan yang asri dan bebas polusi. Setiap koloni dipantau
                  kesehatannya secara rutin untuk memastikan kualitas madu yang
                  optimal.
                </p>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">
                    Lingkungan Alami & Bebas Pestisida
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">
                    Monitoring Kesehatan Koloni Rutin
                  </span>
                </div>
              </div>
              <div className="relative">
                {/* Image Slider for Step 1 */}
                <div className="relative overflow-hidden rounded-xl shadow-lg max-w-md mx-auto group">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    id="slider-step1"
                  >
                    <div className="w-full flex-shrink-0">
                      <Image
                        src="/pk1.jpg"
                        alt="Peternakan Lebah Trigona - Foto 1"
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="w-full flex-shrink-0">
                      <Image
                        src="/pk2.jpg"
                        alt="Peternakan Lebah Trigona - Foto 2"
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>

                  {/* Left Arrow */}
                  <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    onClick={() =>
                      setCurrentSlide1((prev) => (prev === 0 ? 1 : 0))
                    }
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Right Arrow */}
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    onClick={() =>
                      setCurrentSlide1((prev) => (prev === 1 ? 0 : 1))
                    }
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Navigation Dots */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {[0, 1].map((index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentSlide1 === index
                            ? "bg-white opacity-100 scale-110"
                            : "bg-white opacity-50 hover:opacity-80"
                        }`}
                        onClick={() => setCurrentSlide1(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-3xl font-bold text-amber-900">
                    Pengecekan Sarang
                  </h3>
                </div>
                <p className="text-lg text-amber-700 leading-relaxed">
                  Sarang lebah trigona yang unik terbuat dari propolis, bukan
                  lilin seperti lebah madu biasa. Tim kami melakukan pengecekan
                  berkala untuk memastikan kesehatan koloni dan kematangan madu.
                </p>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Sarang Propolis Alami</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">
                    Pengecekan Kematangan Madu
                  </span>
                </div>
              </div>
              <div className="relative">
                {/* Image Slider for Step 2 */}
                <div className="relative overflow-hidden rounded-xl shadow-lg max-w-md mx-auto group">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    id="slider-step2"
                  >
                    <div className="w-full flex-shrink-0">
                      <Image
                        src="/ps1.jpg"
                        alt="Sarang Lebah Trigona - Foto 1"
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="w-full flex-shrink-0">
                      <Image
                        src="/ps2.jpg"
                        alt="Sarang Lebah Trigona - Foto 2"
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>

                  {/* Left Arrow */}
                  <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    onClick={() =>
                      setCurrentSlide2((prev) => (prev === 0 ? 1 : 0))
                    }
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Right Arrow */}
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    onClick={() =>
                      setCurrentSlide2((prev) => (prev === 1 ? 0 : 1))
                    }
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Navigation Dots */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {[0, 1].map((index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentSlide2 === index
                            ? "bg-white opacity-100 scale-110"
                            : "bg-white opacity-50 hover:opacity-80"
                        }`}
                        onClick={() => setCurrentSlide2(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-3xl font-bold text-amber-900">
                    Panen Lestari
                  </h3>
                </div>
                <p className="text-lg text-amber-700 leading-relaxed">
                  Proses panen menggunakan alat sedot khusus yang higienis,
                  bukan dengan cara diperas. Metode ini menjaga kebersihan madu
                  dan tidak merusak struktur sarang untuk keberlanjutan koloni.
                </p>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Metode Sedot Higienis</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Tidak Merusak Sarang</span>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/panen.jpg"
                  alt="Proses Panen Madu"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg w-full h-100 object-cover"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <h3 className="text-3xl font-bold text-amber-900">
                    Penyaringan & Pengemasan
                  </h3>
                </div>
                <p className="text-lg text-amber-700 leading-relaxed">
                  Madu disaring secara minimal, sehingga nutrisi alaminya tetap
                  terjaga. Setiap tetesnya dikemas dengan hati-hati di tempat
                  yang bersih dan aman, siap dinikmati apa adanya.
                </p>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Penyaringan Minimal</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Standar Keamanan Pangan</span>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/penyaringan.jpg?height=300&width=400"
                  alt="Penyaringan dan Pengemasan"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-126 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section
        id="advantages"
        className="py-20 bg-gradient-to-b from-white to-amber-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
              Mengapa Madu Trigona KAWIBAWA?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto leading-relaxed">
              Mengapa Madu Trigona Berbeda? Madu trigona dikenal dengan rasa dan
              khasiatnya yang unik. Kaya nutrisi alami, madu ini memberi manfaat
              luar biasa untuk menjaga kesehatan dan vitalitas Anda.
            </p>
          </div>

          {/* Main Advantages - Compact Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Antioksidan Tinggi */}
            <Card className="group p-6 border-amber-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-amber-900 group-hover:text-blue-600 transition-colors">
                    5x Lebih Kaya Antioksidan
                  </h3>
                </div>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Madu trigona kaya flavonoid dan senyawa bioaktif yang
                  berfungsi melawan radikal bebas, sehingga membantu mencegah
                  penuaan dini dan menjaga kesehatan sel tubuh.
                </p>
              </CardContent>
            </Card>

            {/* Antibakteri */}
            <Card className="group p-6 border-amber-100 hover:border-green-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-green-50">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-amber-900 group-hover:text-green-600 transition-colors">
                    Lebih Kuat Antibakteri & Anti-inflamasi
                  </h3>
                </div>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Madu trigona membantu meredakan peradangan dalam tubuh, baik
                  pada sistem pencernaan, persendian, maupun kulit.
                </p>
              </CardContent>
            </Card>

            {/* Aman Diabetes */}
            <Card className="group p-6 border-amber-100 hover:border-red-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-red-50">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-amber-900 group-hover:text-red-600 transition-colors">
                    Menjaga kesehatan jantung
                  </h3>
                </div>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Senyawa alami dalam madu trigona dapat membantu mengurangi
                  kadar kolesterol jahat (LDL) dan mendukung peredaran darah
                  yang sehat.
                </p>
              </CardContent>
            </Card>

            {/* Stamina */}
            <Card className="group p-6 border-amber-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-amber-900 group-hover:text-purple-600 transition-colors">
                    Mendukung kesehatan pencernaan
                  </h3>
                </div>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Tekstur madu trigona yang lebih encer serta kandungan enzim
                  alaminya membantu melancarkan pencernaan, menenangkan lambung,
                  dan menjaga keseimbangan mikroba baik.
                </p>
              </CardContent>
            </Card>

            {/* Rasa Unik & Cepat Diserap */}
            <Card className="group p-6 border-amber-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Droplets className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-amber-900 group-hover:text-orange-600 transition-colors">
                    Rasa Unik Asam-Manis & Cepat Diserap Tubuh
                  </h3>
                </div>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Memiliki cita rasa khas asam-manis yang menyegarkan dengan
                  tekstur lebih encer, sehingga mudah dan cepat diserap oleh
                  tubuh untuk manfaat yang optimal.
                </p>
              </CardContent>
            </Card>

            {/* Mineral Alami */}
            <Card className="group p-6 border-amber-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-teal-50">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-amber-900 group-hover:text-teal-600 transition-colors">
                    Kaya Mineral Alami
                  </h3>
                </div>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Mengandung mineral penting seperti zat besi, kalsium, dan
                  magnesium yang dibutuhkan tubuh untuk menjaga kesehatan
                  tulang, darah, dan sistem imun.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Scientific Comparison - More Visual */}
          <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 rounded-3xl p-8 border border-amber-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                Perbandingan Madu Trigona vs Madu Biasa
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-amber-600 mb-2">3x</div>
                <div className="text-sm text-amber-800 font-medium">
                  Kandungan Propolis
                </div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-green-600 mb-2">5x</div>
                <div className="text-sm text-amber-800 font-medium">
                  Antioksidan
                </div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                <div className="text-sm text-amber-800 font-medium">
                  Indeks Glikemik
                </div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  100%
                </div>
                <div className="text-sm text-amber-800 font-medium">
                  Murni Alami
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="py-20 bg-gradient-to-b from-amber-50 to-orange-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
              Produk KAWIBAWA
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
              Kami menghadirkan madu trigona premium dalam berbagai varian,
              diproses dengan standar mutu tinggi untuk menjaga
              keaslian dan manfaatnya.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Product 1 */}
            <Card className="overflow-hidden border-amber-100 hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src="/2.jpg"
                  alt="Madu Trigona 150g"
                  width={400}
                  height={400}
                  className="w-full h-80 object-contain bg-white"
                />
                <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                  Best Seller
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  Madu Trigona Premium 150g
                </h3>
                <p className="text-amber-700 mb-4">
                  Ukuran ideal untuk konsumsi harian. Cocok untuk pemula yang
                  ingin merasakan manfaat madu trigona berkualitas premium.
                </p>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-amber-600">(127 ulasan)</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-amber-900">
                      Rp 38.000
                    </span>
                    <span className="text-sm text-amber-600 line-through ml-2">
                      Rp 45.000
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    className="bg-pink-600 hover:bg-pink-700 text-white"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/kawibawa.id",
                        "_blank"
                      )
                    }
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() =>
                      window.open("https://shopee.co.id/kawibawaid", "_blank")
                    }
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Shopee
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product 2 */}
            <Card className="overflow-hidden border-amber-100 hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src="/3.png"
                  alt="Madu Trigona 500ml"
                  width={400}
                  height={400}
                  className="w-full h-80 object-contain bg-white"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  Family Pack
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  Madu Trigona Premium 500ml
                </h3>
                <p className="text-amber-700 mb-4">
                  Ukuran keluarga yang ekonomis. Sempurna untuk konsumsi rutin
                  seluruh keluarga dengan nilai yang lebih menguntungkan.
                </p>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-amber-600">(89 ulasan)</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-amber-900">
                      Rp 122.000
                    </span>
                    <span className="text-sm text-amber-600 line-through ml-2">
                      Rp 130.000
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    className="bg-pink-600 hover:bg-pink-700 text-white"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/kawibawa.id",
                        "_blank"
                      )
                    }
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() =>
                      window.open("https://shopee.co.id/kawibawaid", "_blank")
                    }
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Shopee
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Special Offers */}
          {/* <div className="mt-16 bg-white rounded-2xl p-8 border border-amber-100">
            <h3 className="text-2xl font-bold text-amber-900 text-center mb-6">
              Penawaran Khusus
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-green-800">Gratis Ongkir</h4>
                  <p className="text-green-700">
                    Untuk pembelian minimal Rp 300.000
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800">Garansi Kualitas</h4>
                  <p className="text-blue-700">
                    100% uang kembali jika tidak puas
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
              Kontak & Pemesanan
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
              Hubungi kami untuk konsultasi produk, pemesanan khusus, atau
              pertanyaan seputar madu trigona KAWIBAWA.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-amber-900 mb-6">
                  Informasi Kontak
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg">
                    <Phone className="w-6 h-6 text-amber-600" />
                    <div>
                      <h4 className="font-semibold text-amber-900">WhatsApp</h4>
                      <p className="text-amber-700">+62 858-1065-7153</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg">
                    <Mail className="w-6 h-6 text-amber-600" />
                    <div>
                      <h4 className="font-semibold text-amber-900">Email</h4>
                      <p className="text-amber-700">kawibawa.id@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-amber-600" />
                    <div>
                      <h4 className="font-semibold text-amber-900">Alamat</h4>
                      <p className="text-amber-700">
                        Jl. Cijurei, Kp. Tugu, RT 01/RW 03, Desa Cikurutug,
                        Kecamatan Cireunghas, Kabupaten Sukabumi, Jawa
                        Barat, Kode Pos 43193.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-amber-900 mb-6">
                  Hubungi Kami Sekarang
                </h3>
                <div className="space-y-4">
                  {/* WhatsApp CTA */}
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg"
                    onClick={() =>
                      window.open("https://wa.me/6285810657153", "_blank")
                    }
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Chat di WhatsApp
                  </Button>

                  {/* Instagram CTA */}
                  <Button
                    variant="outline"
                    className="w-full border-pink-300 text-pink-600 hover:bg-pink-50 py-4 text-lg bg-transparent"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/kawibawa.id/",
                        "_blank"
                      )
                    }
                  >
                    <Instagram className="w-5 h-5 mr-3" />
                    Follow Instagram
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-amber-900 mb-6">
                  Beli di Marketplace
                </h3>
                <div className="space-y-4">
                  {/* Shopee */}
                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg"
                    onClick={() =>
                      window.open("https://shopee.co.id/kawibawaid", "_blank")
                    }
                  >
                    <ShoppingBag className="w-5 h-5 mr-3" />
                    Beli di Shopee
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-amber-900" />
                </div>
                <span className="text-xl font-bold">KAWIBAWA</span>
              </div>
              <p className="text-amber-200">
                Madu trigona premium untuk kesehatan yang berwibawa dan
                terpercaya.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produk</h4>
              <ul className="space-y-2 text-amber-200">
                <li>Madu Trigona 150g</li>
                <li>Madu Trigona 500g</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-amber-200">
                <li>Tentang Kami</li>
                <li>Proses Panen</li>
                <li>Kualitas</li>
                <li>Kontak</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; 2025 KAWIBAWA. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
