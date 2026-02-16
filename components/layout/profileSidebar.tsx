import Image from "next/image";

const ProfileSidebar = () => {
  return (
    <aside className="fixed left-6 top-6 bottom-6 w-[320px] rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-xl shadow-xl p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-semibold font-[var(--font-sora)]">
          Muskan
        </h1>
        <p className="text-sm text-gray-500">Frontend Developer</p>

        <div className="relative w-40 h-40 mt-6 mx-auto">
          <Image
            src="/profile.jpg"
            alt="profile"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
      </div>

      <button className="w-full rounded-xl bg-emerald-500 py-3 text-white hover:bg-emerald-600 transition">
        Hire Me
      </button>
    </aside>
  );
};
export default ProfileSidebar;
