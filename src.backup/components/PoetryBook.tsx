import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface PoetryBookProps {
  onClose: () => void;
}

export function PoetryBook({ onClose }: PoetryBookProps) {
  const [currentPage, setCurrentPage] = useState(-2); // Start with cover closed (-2)
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<
    "next" | "prev"
  >("next");
  const [nextPageContent, setNextPageContent] = useState<
    number | null
  >(null);

  const poems = [
    {
      title: "Digital Dreams",
      content: `In pixels and poetry,
I find my voice.
In design and dreams,
I make my choice.

Where wireframes meet wonder,
And prototypes dance,
Every click, every scroll,
A meaningful chance.

To create, to inspire,
To make someone feel,
That technology and art,
Can help us heal.`,
      color: "#00ffff",
      accent: "#ff00ff",
    },
    {
      title: "The Designer's Heart",
      content: `They ask me why I care so much,
About margins and space and such.

But every pixel placed with thought,
Every color carefully sought,
Every interaction designed with grace,
Is a human in a digital space.

Design is not just what it seems,
It's empathy in visual streams.
It's understanding pain and need,
And planting a creative seed.`,
      color: "#ff00ff",
      accent: "#00ff9f",
    },
    {
      title: "Between the Lines",
      content: `Between the lines of code,
Between the layers of design,
Lives a story waiting to unfold,
A human touch, so divine.

I sketch not just interfaces,
But journeys, hopes, and dreams.
Every user flow embraces,
More than what it seems.

In every button, every form,
A conversation starts.
Design becomes the norm,
When it comes from the heart.`,
      color: "#00ff9f",
      accent: "#ffff00",
    },
    {
      title: "Creative Chaos",
      content: `My desk: a beautiful mess,
Sketches scattered, ideas compressed.
Coffee stains on wireframe sheets,
Where chaos and creativity meets.

Some see disorder, I see flow,
A garden where wild ideas grow.
From confusion blooms clarity,
From mess emerges rarity.

This is how I think and feel,
Organized chaos is my deal.
In the madness, magic hides,
That's where true innovation resides.`,
      color: "#ffff00",
      accent: "#ff0080",
    },
    {
      title: "The Space Between",
      content: `There's beauty in the space between,
The margins that remain unseen.
The breathing room, the gentle pause,
The silence that breaks design laws.

Not every pixel must be filled,
Not every moment must be thrilled.
Sometimes less becomes much more,
Sometimes quiet is the core.

In restraint, there's elegance,
In simplicity, there's brilliance.
The space between is not just air,
It's intention placed with care.`,
      color: "#ff0080",
      accent: "#0080ff",
    },
    {
      title: "Midnight Musings",
      content: `At 2 AM, when the world sleeps,
My creativity gently creeps.
Ideas flow like neon light,
Breaking through the quiet night.

This is when I do my best,
When the day has gone to rest.
No meetings, emails, or demands,
Just me, my thoughts, and my hands.

Creating magic in the dark,
Leaving a creative spark.
Tomorrow they will see and say,
"How did you think this way?"

But they don't know the secret truth,
The night reveals my creative youth.`,
      color: "#0080ff",
      accent: "#00ffff",
    },
    {
      title: "Colors Speak",
      content: `Colors speak when words fall short,
They whisper feelings, give support.

Cyan brings the morning calm,
Magenta is a healing balm.
Green speaks growth and fresh new starts,
Yellow lights up lonely hearts.

Every hue, a different mood,
Every shade, an attitude.
I paint with code, design with soul,
Making broken spirits whole.

For in this digital age we face,
Colors give the human race,
A universal language true,
A way to feel, a way to view.`,
      color: "#00ffff",
      accent: "#ff00ff",
    },
    {
      title: "To Every Creator",
      content: `To every creator feeling lost,
Questioning your path, counting the cost.

Your work matters more than you know,
Your art makes someone's spirit glow.
That thing you made at 3 AM?
It's someone's favorite gem.

Keep creating, keep designing,
Even when the world's not shining.
Your perspective, your unique view,
Is what the world needs from you.

Don't compare, don't despair,
Your journey is beyond compare.
Create from love, create from heart,
That's how you make your truest art.`,
      color: "#ff00ff",
      accent: "#00ff9f",
    },
  ];

  const totalPoems = poems.length;
  const totalPages = totalPoems * 2; // Each poem takes 2 pages

  const nextPage = () => {
    const maxPage = totalPages;
    if (currentPage < maxPage && !isFlipping) {
      setFlipDirection("next");
      setNextPageContent(currentPage + 2);
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 2);
        setIsFlipping(false);
        setNextPageContent(null);
      }, 800);
    }
  };

  const prevPage = () => {
    if (currentPage > -2 && !isFlipping) {
      setFlipDirection("prev");
      setNextPageContent(currentPage - 2);
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 2);
        setIsFlipping(false);
        setNextPageContent(null);
      }, 800);
    }
  };

  const getCoverContent = () => {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 md:p-12">
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <BookOpen className="w-20 h-20 mb-6 text-[#ff00ff]" />
        </motion.div>
        <motion.h1
          className="text-5xl md:text-6xl mb-4 text-center"
          style={{ color: "#ff00ff" }}
          animate={{
            textShadow: [
              "0 0 20px #ff00ff60",
              "0 0 40px #ff00ff80",
              "0 0 20px #ff00ff60",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Poetry
        </motion.h1>
        <motion.div
          className="w-32 h-1 rounded-full mb-6"
          style={{
            background:
              "linear-gradient(90deg, #00ffff, #ff00ff, #00ff9f)",
            backgroundSize: "300% 100%",
          }}
          animate={{
            backgroundPosition: [
              "0% 50%",
              "100% 50%",
              "0% 50%",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.h2
          className="text-3xl md:text-4xl mb-8 text-center"
          style={{ color: "#00ffff" }}
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          by Bhumi
        </motion.h2>
        <motion.div
          className="text-center text-muted-foreground italic"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="w-6 h-6 mx-auto mb-2 text-[#ffff00]" />
          <p className="text-sm">Where words meet design</p>
        </motion.div>
      </div>
    );
  };

  const getThankYouContent = () => {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 md:p-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{
            duration: 1,
            type: "spring",
          }}
        >
          <Sparkles className="w-20 h-20 mb-6 text-[#00ff9f]" />
        </motion.div>
        <motion.h1
          className="text-5xl md:text-6xl mb-6 text-center"
          style={{ color: "#00ff9f" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            textShadow: [
              "0 0 20px #00ff9f60",
              "0 0 40px #00ff9f80",
              "0 0 20px #00ff9f60",
            ],
          }}
          transition={{
            textShadow: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          Thank You
        </motion.h1>
        <motion.div
          className="w-40 h-1 rounded-full mb-8"
          style={{
            background:
              "linear-gradient(90deg, #ff00ff, #00ff9f, #00ffff)",
            backgroundSize: "300% 100%",
          }}
          animate={{
            backgroundPosition: [
              "0% 50%",
              "100% 50%",
              "0% 50%",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.p
          className="text-xl md:text-2xl text-center text-muted-foreground italic mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          For reading my words
        </motion.p>
        <motion.p
          className="text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          May creativity always find you
        </motion.p>
        <motion.div
          className="mt-8"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <p className="text-[#ff00ff] text-2xl">♥</p>
        </motion.div>
      </div>
    );
  };

  const getPageContent = (pageIndex: number) => {
    // Cover page
    if (pageIndex === -2 || pageIndex === -1) {
      return getCoverContent();
    }

    // Thank you page
    if (pageIndex >= totalPages) {
      return getThankYouContent();
    }

    const poemIndex = Math.floor(pageIndex / 2);
    const isLeftPage = pageIndex % 2 === 0;
    const poem = poems[poemIndex];

    if (!poem) return null;

    return (
      <div className="h-full flex flex-col justify-center p-8 md:p-12">
        {isLeftPage ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <motion.div
                className="inline-block"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <BookOpen
                  className="w-8 h-8 mb-4"
                  style={{ color: poem.color }}
                />
              </motion.div>
              <motion.h2
                className="text-3xl md:text-4xl mb-2"
                style={{ color: poem.color }}
                animate={{
                  textShadow: [
                    `0 0 20px ${poem.color}60`,
                    `0 0 30px ${poem.color}80`,
                    `0 0 20px ${poem.color}60`,
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {poem.title}
              </motion.h2>
              <motion.div
                className="w-20 h-1 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${poem.color}, ${poem.accent})`,
                }}
                animate={{
                  width: ["80px", "120px", "80px"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-foreground/90 leading-relaxed text-lg md:text-xl whitespace-pre-line italic"
              style={{
                fontFamily: "'Georgia', serif",
              }}
            >
              {poem.content}
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="h-full flex items-center justify-center"
          >
            <motion.div
              className="text-center"
              animate={{
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="text-8xl md:text-9xl opacity-10 mb-4"
                style={{ color: poem.accent }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                "
              </motion.div>
              <motion.p
                className="text-xl md:text-2xl italic text-muted-foreground"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                - Bhumi
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </div>
    );
  };

  const isClosed =
    currentPage === -2 || currentPage >= totalPages;
  const displayLeftPage =
    nextPageContent !== null && flipDirection === "next"
      ? currentPage
      : nextPageContent !== null && flipDirection === "prev"
        ? nextPageContent
        : currentPage;
  const displayRightPage =
    nextPageContent !== null && flipDirection === "prev"
      ? currentPage
      : nextPageContent !== null && flipDirection === "next"
        ? nextPageContent
        : currentPage;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl flex items-center justify-center p-4 overflow-hidden"
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background:
                i % 4 === 0
                  ? "#00ffff"
                  : i % 4 === 1
                    ? "#ff00ff"
                    : i % 4 === 2
                      ? "#00ff9f"
                      : "#ffff00",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Close Button */}
      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        className="fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-sm border-2 bg-card/30"
        style={{
          borderColor: "#ff00ff",
          boxShadow: "0 0 30px #ff00ff60",
        }}
      >
        <X className="w-6 h-6 text-[#ff00ff]" />
      </motion.button>

      {/* Book Container */}
      <div
        className="relative max-w-6xl w-full aspect-[16/10]"
        style={{ perspective: "2500px" }}
      >
        <motion.div
          initial={{ rotateY: -20, scale: 0.8 }}
          animate={{
            rotateY: isClosed ? -5 : 0,
            scale: 1,
          }}
          transition={{ duration: 1, type: "spring" }}
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Book Shadow */}
          <motion.div
            className="absolute inset-0 blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at center, #00ff9f, transparent 70%)",
              transform: "translateZ(-50px)",
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Book Spine - Only visible when open */}
          {!isClosed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute left-1/2 top-0 bottom-0 w-12 -translate-x-1/2 z-30"
            >
              <div
                className="w-full h-full rounded-lg"
                style={{
                  background:
                    "linear-gradient(90deg, #1a1a2e, #0a0a0f, #1a1a2e)",
                  boxShadow:
                    "inset 0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0, 255, 159, 0.3)",
                }}
              />
            </motion.div>
          )}

          {/* Left Page (Base) */}
          <motion.div
            className="absolute left-0 top-0 w-1/2 h-full z-10"
            animate={{
              rotateY: isClosed ? 0 : 0,
            }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative w-full h-full rounded-l-3xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #1a1a2e 0%, #13131a 100%)",
                boxShadow:
                  "inset -10px 0 30px rgba(0,0,0,0.5), 0 10px 50px rgba(0,0,0,0.3)",
                border: "2px solid rgba(0, 255, 159, 0.2)",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`,
                }}
              />
              <div className="relative z-10 h-full">
                {getPageContent(displayLeftPage)}
              </div>
              {!isClosed && currentPage >= 0 && (
                <motion.div
                  className="absolute bottom-8 left-8 text-sm text-muted-foreground"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {displayLeftPage + 1}
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Right Page (Base) */}
          <motion.div
            className="absolute right-0 top-0 w-1/2 h-full z-10"
            animate={{
              rotateY: isClosed ? 0 : 0,
            }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative w-full h-full rounded-r-3xl overflow-hidden"
              style={{
                background: isClosed
                  ? "linear-gradient(135deg, #1a1a2e 0%, #13131a 100%)"
                  : "linear-gradient(135deg, #13131a 0%, #1a1a2e 100%)",
                boxShadow:
                  "inset 10px 0 30px rgba(0,0,0,0.5), 0 10px 50px rgba(0,0,0,0.3)",
                border: "2px solid rgba(255, 0, 255, 0.2)",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`,
                }}
              />
              <div className="relative z-10 h-full">
                {isClosed ? (
                  <div className="h-full flex items-center justify-center">
                    <motion.p
                      className="text-sm text-muted-foreground italic"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      {currentPage === -2
                        ? "Click Next to open"
                        : ""}
                    </motion.p>
                  </div>
                ) : (
                  getPageContent(displayRightPage + 1)
                )}
              </div>
              {!isClosed && currentPage >= 0 && (
                <motion.div
                  className="absolute bottom-8 right-8 text-sm text-muted-foreground"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                >
                  {displayRightPage + 2}
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Flipping Page Overlay - Right to Left (Next) */}
          <AnimatePresence>
            {isFlipping && flipDirection === "next" && (
              <motion.div
                className="absolute right-0 top-0 w-1/2 h-full z-20"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "left center",
                }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: -180 }}
                exit={{ rotateY: -180 }}
                transition={{
                  duration: 0.8,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
              >
                {/* Front of flipping page */}
                <div
                  className="absolute inset-0 rounded-r-3xl overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    background:
                      "linear-gradient(135deg, #13131a 0%, #1a1a2e 100%)",
                    boxShadow:
                      "inset 10px 0 30px rgba(0,0,0,0.5), 0 10px 50px rgba(0,0,0,0.3), -10px 0 30px rgba(0,0,0,0.6)",
                    border: "2px solid rgba(255, 0, 255, 0.2)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`,
                    }}
                  />
                  {currentPage === -2 ? (
                    <div className="h-full flex items-center justify-center" />
                  ) : (
                    getPageContent(currentPage + 1)
                  )}
                </div>
                {/* Back of flipping page */}
                <div
                  className="absolute inset-0 rounded-l-3xl overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background:
                      "linear-gradient(135deg, #1a1a2e 0%, #13131a 100%)",
                    boxShadow:
                      "inset -10px 0 30px rgba(0,0,0,0.5), 0 10px 50px rgba(0,0,0,0.3), 10px 0 30px rgba(0,0,0,0.6)",
                    border: "2px solid rgba(0, 255, 159, 0.2)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`,
                    }}
                  />
                  {getPageContent(currentPage + 2)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Flipping Page Overlay - Left to Right (Previous) */}
          <AnimatePresence>
            {isFlipping && flipDirection === "prev" && (
              <motion.div
                className="absolute left-0 top-0 w-1/2 h-full z-20"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "right center",
                }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 180 }}
                exit={{ rotateY: 180 }}
                transition={{
                  duration: 0.8,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
              >
                {/* Front of flipping page */}
                <div
                  className="absolute inset-0 rounded-l-3xl overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    background:
                      "linear-gradient(135deg, #1a1a2e 0%, #13131a 100%)",
                    boxShadow:
                      "inset -10px 0 30px rgba(0,0,0,0.5), 0 10px 50px rgba(0,0,0,0.3), 10px 0 30px rgba(0,0,0,0.6)",
                    border: "2px solid rgba(0, 255, 159, 0.2)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`,
                    }}
                  />
                  {getPageContent(currentPage)}
                </div>
                {/* Back of flipping page */}
                <div
                  className="absolute inset-0 rounded-r-3xl overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg) scaleX(-1)",
                    background:
                      "linear-gradient(135deg, #13131a 0%, #1a1a2e 100%)",
                    boxShadow:
                      "inset 10px 0 30px rgba(0,0,0,0.5), 0 10px 50px rgba(0,0,0,0.3), -10px 0 30px rgba(0,0,0,0.6)",
                    border: "2px solid rgba(255, 0, 255, 0.2)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`,
                    }}
                  />
                  <div style={{ transform: "scaleX(-1)" }}>
                    {currentPage === 0 ? (
                      <div className="h-full flex items-center justify-center" />
                    ) : (
                      getPageContent(currentPage - 1)
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-4"
        >
          <Button
            onClick={prevPage}
            disabled={currentPage === -2 || isFlipping}
            className="rounded-full gap-2 disabled:opacity-30"
            style={{
              background:
                "linear-gradient(90deg, #00ffff, #ff00ff)",
              color: "#0a0a0f",
            }}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </Button>
          <div className="flex items-center gap-2 px-4 text-sm text-muted-foreground">
            {currentPage === -2 ? (
              <span>Cover</span>
            ) : currentPage >= totalPages ? (
              <span>End</span>
            ) : (
              <>
                <span>{Math.floor(currentPage / 2) + 1}</span>
                <span>/</span>
                <span>{Math.ceil(totalPoems)}</span>
              </>
            )}
          </div>
          <Button
            onClick={nextPage}
            disabled={currentPage >= totalPages || isFlipping}
            className="rounded-full gap-2 disabled:opacity-30"
            style={{
              background:
                "linear-gradient(90deg, #ff00ff, #00ff9f)",
              color: "#0a0a0f",
            }}
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}