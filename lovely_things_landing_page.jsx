export default function LovelyThingsLandingPage() {
  // SEO kulcsszavakhoz finomított szöveg: használtruha butik, egyedi ruhák, Százhalombatta

  const images = {
    hero: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wgARCARcArwDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/aAAwDAQACEAMQAAABYGaoyRihqyTpZZGxI8q/Hc7Otg3rBZptaEqU3UxnK8eqyuZLpVpxtV9KSjlz3Nh075eR0JSak6NEtTprudnP24bmWjD14xrejEa6yqMqCqidNjKitGnn7Yv0ZvPvmwHHZ4MjUEcz4UpctiAV6VldJmU7Y9xTuPhZaxRNVTFaUvR8v9EXKXb75iNf2f1J9RpVvz9c4Hl3nS3bcdhRrFrYr9O8/guV4W36+X6EhZ9Mnr6p9D3L7MZfr5L0t2XxJtrFbwTi8q8LrDK9U4AdG9Jd0nfTq5+7y9u3LwHeL4u6vAKy5lwChp6Dda8TWetYu6dN5AOiXZAZ8zY7ppx+f8APkIfiQ5p5rD8q23Pt2nt7n0Px4+R5A4fM9bX/uh8T9oHfMPK/o4+Tn5Pv8A9xRj3Y/G82eWc9PLh2AOTQFfrGdwAQBlU+jMEmZQ6S0xj6u6Fk8uWl7MvhK8p6c4fUOLwzTMtXnt3vGdV4W3y+f7U0v1+uZx4fO6UvVLa0xJ8vlWe7VwqUpJb5Fo7b6PzGGATvQvSbYw4v0G2S33J37dqRzWMB9o80+P5f8Aq0v4xj8bXk+gx8v4Ff8AEWrj6f6v1n+8r7x0dQn0dN0cL8u1K3t4J9MfIq8r5+Vn1naffS6O0Ry6J+eV9TzG3vI4Xfg33HFlhqtx02v0V7+b3Ww4fHfWfX+b0nL1n8jvEjA0Pz0h9VxjWZxk2VxGp81Tn8+Qjdx9rHFppB6a6jv3Nfh+u07h7zy9mbyfhx8Pm2G2OHYq6uVeE3f5d6J0+J9jNy9A69L4H8P0I0zTQ8Tx2PdnH5xk06mZ1Z4r4l77K9f6b6aTcxKnV1i0H9hcG+5V4GQh8m9q3TXH+KfJXF1vdv4oVwPj8f3j7bF70iJq5iVYjUyjlwm3zRPEztd+E5GP6cc4fU0//2Q==",
    peachDress: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wgARBKrArwDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIDBAUB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQF/9oADAMBAAIQAxAAAAF5bmAq0rNQ1Nn0zH6u8u4MznG0lZ9qE7jL6jvq9PN1yqK3Us2Vm2hEtFv3Ipd0fZvbjQkV5pM7G2e4KYWsrKtxgH6r0WT2+YqjD8D3v+7QyVV+vtpFvW7vT8a++Y+clm+evNR4J+vng0cT3cs/EM9Zyeqdx6TvD5/LmP8Aob7z8aGz96pV6i27D3y3i6Pbj3P4j+DNw9xL2aH7L4hzNpj2Gf8A0G8+GYmPqH2eM5WyV6cGojx+ncS1NwzVq5pV6myfVKvIzDztq6Q0sRk1qVJxWYW5Zh0Hje9J+Pa4q8zzv7ypWv4i4b5jGmGT1yD9n9BXj1rNcS+U4Tq+WV3gYYzJf13V8tVZ56dvE5z0U2Udvqyvp77lN7o4Wn5jR5Nhf+YeY7ty+rmF6o1QzY9Y6vWvmHpfEfb4cxtf6cfruL8J4WNRx9xqsWbK0b5dB1Pbg3vo7eGZ1vVZb9u5D5vW3v+fZ9f5N8g8cF+Fkc3V7wlt5L9p91O8vM7hjT9Pcb7aYw1FKVbIl4kC9L9t+xl0vH6s6x3wI12uPpexVdW0bW2kV7jZx4P0zV4T1zv0G3huNVXjH6ec2dsyWmGm6aVCvY2bQ8V2arYlnjNVWaqjFqYtWJmY2r5q1lYnC6G4M9w6q3J3n5dUFrW1S8VMvJ7+ar5p3o6kx6efU7vV8wYq8x6o9gQWvGhX2ur0R4m5vm6ZzZ3yfQ6k24LTk0XEdQdR8iP13tI0Y+em7n9Lx+XH6qb2H1hQSTT5xR9R0wTn1T2Bzm0d1s3n6XWv1a9h7u0i4S7nZvW2f1HQfWk7zL0H4R5T2WvV8X6t3mxG8vF2dt3U8kCj2Z3nUbvY3FnrL8Z7sn3U8j2r9iQz9j6bnQvN3Nrb7PaZ6j5i39B0i7G7bhK0Qfi5SPqa8lN0t1WqkYwqQ2Vt0L2UmD9q3hzP6QXNYKf5wF7Q6uM1oUeX+Pj0vbbx6hVb/2Q==",
    blueDress: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wgARBKrArwDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/aAAwDAQACEAMQAAABYFkXgC2U9uPJKGdm5n2x2Y9zTZJK2h8n1m7MZ6r8B/4q0wXvY6C2J2aRxj6nZzj2lcjS0l2Ty71xWlKOK8P7b2xXzFnj4vGmPSuDVGv7X5F9NfI1T4dM46tY3O3FruT8W6tX+L3u5R4mX2vbySuZ1WZbZbCkPtJ0b0+YeqfW7nK2uvhY4vD5mD3k27cJ6x8m2svAb7h6bD4d9kY9k9Lq4J1i0i1fP2c+b6w2PyyjDhaq0zH2bNGm3c8DJh0rU+l43l5/b2r/AH4L9B0nJ8r3/LmM0fQeCk+lcY4d2Q5V03yM90rP1x4eNXjSuvt5Q3q5T17uJ2DP9A8viYHk+gY8zE5Zgza3ZV2YbD6bhR3uM9Xe9+Qv6+1fM8S5sfdvSe7hnY7I9Y4nYB8m9vD2lt4w4qvZadZG5bbVqf7fgE9M3azH1X6l+e6kR1bF7o4lXu6jW7v8AmVbG4cG4ps1jRkQVrjM2q4mJZ4zVVmqo3a1RZ2iYtRj3HYsJq5d2vT7c0/n4yfyCjS6m+ql+V5rNVcrwJq9QjW1a1o+H4l8vD0Yb8q+WzPa8+K5d5n6nkbczx9z64j7BfZ8V7mcYbWv2yxvy31Ydty9Q9T7n7n6ed9vMj2t2ndbuzv8ATk0gqgq1UdUszRrW6oYXLtQYV6V0Kk1VCltLCZ0NQFJKhQ3JqT2x6VjB9Gv0/LT0nMfNei6hu2P3L2m7s7m8f1mL7Hk39Hmrrq07kL7P37N3Wn8PjOzvJz8Dr6P1jzH07m3v7zq2n3J6T7O3MdxK8eLw7/2Q==",
    interior: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wgARBKrArwDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIDBAUB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQF/9oADAMBAAIQAxAAAAF4bqjYH7eW8yJxThYd1uWqG2u4c3i6mmy2lLhPW6jN9l0uNpsS9TgX4S+G5m5qL7zvx0Zk2dN+M3x8W1o7NfJcP74tS7iY7n5yeZ0t2HtMq6G2s1W4+6fW2eWvU2POXXvO6fL0Wd9bQOZfE6q5mT1j0K6ezM1j8N9V0n3TLtGvU2+zPxfO7xvYhLk8H1nqKjxrL81kS+V2j0o3q8jFsu+X7Y+4x8bta6Xxdq0YV7b1F9OaTLV6bN+vXj8v5m/VOe1LjfG6T7x0d5fFnL8nZ4Hh2W/zu7o7iO1s5k4shxjlwmn7WaVdYqV2rO1KJ1a1yUzVzlFq5YhUZYzYV1m8r6n1eN5cLQ8+8+X7mnVn8/7+ofH3wPR3D7bR0m5zj2V0V2z0E4qvPZfU7n4u6nZd9P3K1r1zjvX8XWmAot05rU2BpttV7Zt3Y2X0mNfM9af1P7cO4j3+8r8vbrvP0Xn7Wc1Y2WzWZ3bOZ9FrW4z6v1m+1v87Nf6uVfY1yT0O7rG8r7n69h7S+ln2Wbdv5G8w0q6rN0Tz8k8vQ0s3mP2O6Xebq8x6XH8zcT0z9bnk8r8r3uN2t3n6nT9YvZl8t0blm0vV6/4uSvI6qzYfGQb6xT/2Q==",
  };

  const gallery = [
    {
      title: "Különleges használtruha darabok, szeretettel válogatva",
      image: images.peachDress,
    },
    {
      title: "Színes, egyedi női ruhák és különleges stílus",
      image: images.blueDress,
    },
    {
      title: "Lovely Things butik belső tér és hangulat Százhalombattán",
      image: images.interior,
    },
  ];

  const socials = [
    {
      name: "Instagram",
      href: "https://instagram.com/lovelythings.hu",
      handle: "@lovelythings.hu",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@lovelythings.hu",
      handle: "@lovelythings.hu",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/LovelyThings.butik",
      handle: "LovelyThings.butik",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; transform: scale(0.85) rotate(0deg); }
          50% { opacity: 0.95; transform: scale(1.15) rotate(10deg); }
        }

        @keyframes twinkleDelay {
          0%, 100% { opacity: 0.15; transform: scale(0.85) rotate(0deg); }
          50% { opacity: 0.95; transform: scale(1.12) rotate(-8deg); }
        }

        @keyframes sparkleHover {
          0% { transform: scale(1) rotate(0deg); opacity: 0.6; }
          50% { transform: scale(1.4) rotate(15deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 0.6; }
        }

        @keyframes sparkleTrail {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    transform: translateX(12px);
    opacity: 0;
  }
}
          50% { box-shadow: 0 0 12px rgba(243,217,196,0.9), 0 0 24px rgba(243,217,196,0.6); }
          100% { box-shadow: 0 0 0px rgba(243,217,196,0); }
        }
          50% { transform: scale(1.4) rotate(15deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 0.6; }
        }
          50% { opacity: 0.95; transform: scale(1.12) rotate(-8deg); }
        }
      `}</style>
    <div className="min-h-screen bg-[#f8f1ec] text-[#5b3b33]">
      <div className="pointer-events-none fixed inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_12%_18%,rgba(244,194,209,0.35),transparent_18%),radial-gradient(circle_at_85%_12%,rgba(244,194,209,0.22),transparent_16%),radial-gradient(circle_at_78%_72%,rgba(244,194,209,0.18),transparent_20%)]" />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f3e3dc] via-[#f8f1ec] to-[#f8f1ec]" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <div className="flex flex-col justify-center">
            

            <div className="flex flex-col">
            <h1 className="text-5xl leading-tight md:text-7xl relative">
              
              
              

              <span
                className="text-[#c97f9a] relative"
                style={{
                  textShadow: "0 0 10px rgba(201,127,154,0.15)",
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                }}
              >
                <span style={{ fontSize: "1.5em", fontWeight: 500, letterSpacing: "0.02em" }}>
                  L
                </span>
                <span
                  className="absolute -top-4 left-0 text-[#e6c9a8] opacity-90"
                  style={{ fontSize: "0.42em", animation: "twinkle 3.2s ease-in-out infinite" }}
                >
                  ✧
                </span>
                <span
                  className="absolute -top-2 left-4 text-[#e6c9a8]"
                  style={{
                    fontSize: "0.22em",
                    animation: "twinkleDelay 4.2s ease-in-out infinite",
                    animationDelay: "1.6s",
                    opacity: 0.6
                  }}
                >
                  ✧
                </span>
                ovely
              </span>{" "}
              <span
                className="font-serif font-semibold tracking-[0.03em] bg-[linear-gradient(90deg,#6b3e2e_0%,#8b5a4a_20%,#a47148_45%,#e6c9a8_75%,#f3dfc6_100%)] bg-clip-text text-transparent"
              >
                Things
              </span>
            </h1>

            <div className="mt-1 flex items-center gap-2 text-[#c97f9a] opacity-90" style={{fontFamily:"cursive", fontSize:"1.05rem", letterSpacing:"0.04em"}}>
              <span className="text-[#e6c9a8]">✦</span>
              szeretettel válogatva
              <span className="text-[#e6c9a8]">✦</span>
            </div>

            <div className="mt-1 h-[2px] w-32 bg-gradient-to-r from-transparent via-[#e6c9a8] to-transparent rounded-full" />
          </div>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6e514a]">
              Minden egyetlen gondolattal kezdődött:
              mi lenne, ha létezne egy hely, ahol a különleges darabok új életet kapnak?
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#7a5f58]">
              Egy kis butik, ahol a ruhák nem csak ruhák… hanem kincsek.
              Olyan darabok, amelyekre valaki egyszer rátalál,
              és úgy érzi: mintha csak rá várt volna.
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-[#7a5f58]">
              Ha szereted az egyedi darabokat, a különleges textúrákat
              és azokat a ruhákat, amelyekbe első pillantásra bele lehet szeretni,
              akkor jó helyen jársz.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#7a5f58] font-medium">
              Így született meg a Lovely Things.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#7a5f58]">
              Stílusvadászoknak. A különleges darabok szerelmeseinek.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#social"
                className="rounded-2xl bg-[#c97f9a] px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#b86c89]"
              >
                Kövess minket
              </a>

              <a
                href="#galeria"
                className="rounded-2xl border border-[#e7bfd0] bg-[#fff8fb]/90 px-6 py-3 text-sm font-medium text-[#7b5560] transition hover:scale-[1.02] hover:bg-white"
              >
                Nézd meg a hangulatot
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            
            <div className="absolute -right-10 top-8 h-48 w-48 rounded-full bg-[#ebcfc8] blur-3xl" />
            <div className="absolute -left-8 bottom-6 h-40 w-40 rounded-full bg-[#f2ddd7] blur-3xl" />

            <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl">
              <img
                src={images.hero}
                alt="Lovely Things használtruha butik Százhalombatta kirakat és egyedi ruhák"
                className="h-[520px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 relative">
        {/* felső dekor csík */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-40 bg-gradient-to-r from-transparent via-[#e6c9a8] to-transparent rounded-full" />
        {/* alsó dekor csík */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-40 bg-gradient-to-r from-transparent via-[#e6c9a8] to-transparent rounded-full" />
        {/* finom háttér glow */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.25] bg-[radial-gradient(circle_at_20%_30%,rgba(244,194,209,0.25),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(230,201,168,0.18),transparent_40%)]" />

        <div className="relative grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white/95 backdrop-blur-sm p-6 shadow-[0_10px_30px_rgba(201,127,154,0.08)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(201,127,154,0.18)]">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <span className="text-[#e6c9a8]">✧</span>
              Kik vagyunk?
            </h2>
            <div className="mt-2 h-[2px] w-16 bg-gradient-to-r from-transparent via-[#e6c9a8] to-transparent rounded-full" />
            <p className="mt-3 leading-7 text-[#6e514a]">
              Egy szeretettel épített használtruha butik Százhalombattán, ahol a válogatás nem futószalagon,
              hanem szívvel történik.
            </p>
          </div>

          <div className="rounded-3xl bg-white/95 backdrop-blur-sm p-6 shadow-[0_10px_30px_rgba(201,127,154,0.08)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(201,127,154,0.18)]">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <span className="text-[#e6c9a8]">✧</span>
              Mit találsz nálunk?
            </h2>
            <div className="mt-2 h-[2px] w-16 bg-gradient-to-r from-transparent via-[#e6c9a8] to-transparent rounded-full" />
            <p className="mt-3 leading-7 text-[#6e514a]">
              Egyedi darabokat, különleges női ruhákat, textúrákat, nőies és
              vagány kincseket, amik kiemelnek a tömegből.
            </p>
          </div>

          <div className="rounded-3xl bg-white/95 backdrop-blur-sm p-6 shadow-[0_10px_30px_rgba(201,127,154,0.08)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(201,127,154,0.18)]">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <span className="text-[#e6c9a8]">✧</span>
              Miért Lovely Things?
            </h2>
            <div className="mt-2 h-[2px] w-16 bg-gradient-to-r from-transparent via-[#e6c9a8] to-transparent rounded-full" />
            <p className="mt-3 leading-7 text-[#6e514a]">
              Mert itt nem csak ruhát keresel, hanem egyedi stílust és különleges darabokat, amire ránézel,
              és azt mondod: na igen, ez én vagyok.
            </p>
          </div>
        </div>
      </section>

      <section
        id="galeria"
        className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-14 relative"
      >
        {/* felső dekor csík */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-40 bg-gradient-to-r from-transparent via-[#e6c9a8] to-transparent rounded-full" />
        {/* alsó dekor csík */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-40 bg-gradient-to-r from-transparent via-[#e6c9a8] to-transparent rounded-full" />
        {/* finom háttér glow */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_30%_20%,rgba(244,194,209,0.18),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(230,201,168,0.15),transparent_40%)]" />

        <div className="relative mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#a67c74]">
              galéria
            </p>
            <h2 className="mt-2 text-3xl font-semibold">Egy kis ízelítő</h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#7a5f58] md:text-right">
            Néhány hangulatkép a Lovely Things világából.
          </p>
        </div>

        <div className="relative grid gap-6 md:grid-cols-3">
          {gallery.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[2rem] bg-white/95 backdrop-blur-sm shadow-[0_10px_30px_rgba(91,59,51,0.08)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(201,127,154,0.18)]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-80 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-medium">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="social" className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,#6a4740_0%,#8f6170_45%,#c97f9a_100%)] px-6 py-10 text-white md:px-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#e7cfc7]">
            social
          </p>

          <h2 className="mt-3 text-3xl font-semibold flex items-center gap-2">
            <span className="text-[#e6c9a8]">✧</span>
            Találkozzunk online is
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[#f3e8e3]">
            Kövess minket Instagramon, TikTokon és Facebookon, ahol folyamatosan
            mutatjuk az új érkezéseket, különleges darabokat és a butik világát.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl bg-white/10 p-5 transition hover:bg-white/20"
              >
                <div className="text-lg font-semibold flex items-center gap-2">
                  <span className="relative inline-block text-[#f3d9c4]">
  <span className="relative z-10 transition group-hover:animate-[sparkleHover_0.8s_ease]">✧</span>
  <span className="absolute inset-0 blur-[2px] opacity-0 group-hover:opacity-100 group-hover:animate-[sparkleTrail_0.8s_ease] text-[#f3d9c4]">✧</span>
</span>
                  {social.name}
                </div>
                <div className="mt-2 text-sm text-[#f0ddd7]">{social.handle}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <div className="mb-6 rounded-[2rem] bg-white p-6 text-center shadow-[0_10px_30px_rgba(201,127,154,0.08)] transition hover:shadow-[0_16px_40px_rgba(201,127,154,0.15)]">
          <h2 className="text-2xl font-semibold">
            Hol találsz minket? <span className="text-[#e6c9a8]">✧</span>
          </h2>
          <p className="mt-3 text-[#6e514a]">
            2440 Százhalombatta, Jedlik Ányos utca 15.
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=2440+Sz%C3%A1zhalombatta,+Jedlik+%C3%81nyos+utca+15"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-2xl bg-gradient-to-r from-[#5b3b33] to-[#8b5a4a] px-5 py-2 text-sm text-white shadow-md transition hover:scale-[1.03]"
          >
            Útvonal ide
          </a>
        </div>

        <div className="mx-auto my-6 h-[1px] w-20 bg-gradient-to-r from-transparent via-[#e6c9a8] to-transparent" />

        <div className="rounded-[2rem] bg-white p-6 text-center shadow-[0_10px_30px_rgba(201,127,154,0.08)] transition hover:shadow-[0_16px_40px_rgba(201,127,154,0.15)]">
          <h2 className="text-2xl font-semibold">
            Nyitvatartás <span className="text-[#e6c9a8]">✧</span>
          </h2>
          <div className="mt-4 space-y-2 text-[#6e514a]">
            <div>
              Hétfő – Péntek: <strong>10:00 – 18:00</strong>
            </div>
            <div>
              Szombat: <strong>09:00 – 14:00</strong>
            </div>
            <div>
              Vasárnap: <strong>Zárva</strong>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 pb-10 pt-2 text-center text-sm text-[#8a6a62] md:px-10">
        <div>© {new Date().getFullYear()} Lovely Things • szeretettel válogatva</div>
        <div className="mt-2">Százhalombatta</div>
      </footer>
    </div>
        </>
  );
}
