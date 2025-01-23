import Hero from "@/components/ui/hero";
import { StaticBreadcrumbs } from "@/components/ui/breadcrumbs";
import { Box, Heading, List, Text } from "@chakra-ui/react";
import SectionHeadingsCentered from "@/components/ui/section-headings-centered";
import Blockquote from "@/components/ui/blockquote";
import { CollapsibleSection } from "@/components/ui/colapsable-section";
import ReawakeningQuickLinks from "@/components/sections/reawakening-quick-nav-section";

export default function CharacterAdvancementPage() {
  return (
    <Box className="bg-background text-foreground page-section">
      {/* Hero Section */}
      <Hero
        src="/images/reawakening/custom-mechanics/custom-mechanics-banner.png"
        alt="Reawakening Custom Mechanics & Clarifications"
      />
      <StaticBreadcrumbs
        routes={[
          { label: "Home", href: "/" },
          { label: "Reawakening", href: "/reawakening" },
          { label: "Custom Mechanics", href: "#" },
        ]}
      />
      <Box className="page-section bottom-border">
        <SectionHeadingsCentered
          section_heading="Rapid Mass Combat"
          subsection_heading=""
        />
        <Text className="mb-4">
          In order to keep the game moving, we will be using the optional “Rapid
          Mass Combat” rules in Chapter 4 of the core rules. Per the rule, its
          application will be at Storyteller discretion.
        </Text>
      </Box>
      <Box className="page-section bottom-border">
        <SectionHeadingsCentered
          section_heading="City Status"
          subsection_heading=""
        />
        <Text className="mb-4">
          Due to the 6 game nature of this chronicle, as well as some of the
          game timing, we are modifying some of the City Status rules for
          Camarilla court members as listed in the Laws of the Night rulebook:
        </Text>
        <Blockquote
          heading="Prince"
          text={
            <>
              <Text className="mb-4">
                In the core Laws of the Night rules, a Kindred may not have
                their status raised or lowered by the Prince if their status has
                been raised or lowered by the Prince within the last 6 months.
                We are changing this restriction from 6 months to 2 games.
              </Text>
              <Text className="mb-4">
                Effectively, this means the Prince cannot modify a character’s
                status during consecutive games of the chronicle.
              </Text>
            </>
          }
        />
        <Blockquote
          heading="Sheriff"
          text={
            <>
              <Text className="mb-4">
                To clarify, a character may have their status lowered by the
                Sheriff a maximum of once per game. The Sheriff may lower the
                status of multiple Kindred in a single game in this way,
                provided they find these Kindred have violated a Tradition, law
                or rule.
              </Text>
              <Text className="mb-4">
                Once the Sheriff has lowered a Kindred’s status for a particular
                crime, they may not lower their status again for the same crime
                during a later game. The Sheriff may still punish the same
                character for a different crime in a later game.
              </Text>
            </>
          }
        />
        <Blockquote
          heading="Herald"
          text={
            <>
              <Text className="mb-4">
                In the core Laws of the Night rules, a Kindred may not have
                their status raised or lowered by the Herald if their status has
                been raised or lowered by the Herald within the last 6 months.
                We are changing this restriction from 6 months to 2 games.
              </Text>
              <Text className="mb-4">
                Effectively, this means the Herald cannot modify a character’s
                status during consecutive games of the chronicle.
              </Text>
              <Text className="mb-4">
                In addition, the status restriction for a Boon Breaker will not
                be lifted automatically after six months - the boon must be
                satisfied per the Harpy.
              </Text>
            </>
          }
        />
        <Blockquote
          heading="Keeper of Elysium"
          text={
            <>
              <Text className="mb-4">
                The status restriction for violating Elysium will not be lifted
                automatically after six months - reparations must be made per
                the Keeper or the Prince.
              </Text>
            </>
          }
        />
      </Box>
      <Box className="page-section bottom-border">
        <SectionHeadingsCentered
          section_heading="Equipment"
          subsection_heading=""
        />
        <Heading className="subheading !text-inherit">Item Cards</Heading>
        <Text className="mb-4">
          We will be using Item Cards to track what mechanical items a character
          possesses. Item cards reflect a character’s access to a particular
          piece of gear or equipment, and will be required to use that item in
          play. An item card will include the quality of the item, as well as a
          blank space to write the kind of item possessed.
        </Text>
        <Blockquote
          heading="Worn Items"
          text={
            <>
              <Text className="mb-4">
                If a character is actively wearing or carrying an item - for
                example, wearing riot gear or a sword on their hip or back -
                that player must wear an additional, visible name-tag holder
                with that item card inside. For each additional piece of gear
                worn or carried, an additional tag holder must be used.
              </Text>
              <Text className="mb-4">
                Since weapons and weapon props are not allowed at game, this is
                to help other players (and storytelling staff) understand the
                difference between one character wearing a low-profile kevlar
                vest and no visible weapons, and a second character in full
                tactical gear carrying a pump-action shotgun with a two handed
                greatsword slung across her back.
              </Text>
              <Text className="mb-4">
                If a player is not wearing a tag holder with the related item
                card, their character is considered not to have immediate access
                to that weapon or gear - it may be in a locker, back in their
                haven, or in the trunk of the character’s car.
              </Text>
            </>
          }
        />
        <Blockquote
          heading="Concealed Items"
          text={
            <>
              <Text className="mb-4">
                Melee Weapons with the “Concealable” quality, Ranged weapons
                with the “Compact” quality, and Protective Gear with the
                “Inconspicuous” quality do not require a visible name-tag holder
                and their related item cards may instead be carried somewhere on
                the character’s person. This reflects the fact these items are
                not visible to other characters.
              </Text>
              <Text className="mb-4">
                The character is considered to have immediate access to these
                weapons, or be wearing this Protective Gear, as long as they
                have the item card on their person. As a reminder, only one
                piece of Protective Gear may be worn at a time.
              </Text>
            </>
          }
        />
        <Blockquote
          heading="Stealing Items"
          text={
            <>
              <Text className="mb-4">
                Item cards left unattended in play may be taken by other
                players, reflecting theft of that item. A player leaving an item
                card unattended in a play area is effectively leaving that item
                there.
              </Text>
              <Text className="mb-4">
                Item cards may also be pickpocketed through use of the Larceny
                skill. This requires a Storyteller to adjudicate, and some items
                can’t be taken without notice. Never, ever try to{" "}
                <strong>actually</strong> pickpocket an item card from a player.
                (See the no-touching rule)
              </Text>
            </>
          }
        />
        <Heading className="subheading !text-inherit">
          Equipment Qualities
        </Heading>
        <Blockquote
          heading="Bane"
          text={
            <>
              <Text className="mb-4">
                We have a few clarifications on Bane weapons & ammunition:
              </Text>
              <List.Root className="list-disc pl-12">
                <List.Item>
                  Melee Weapons with the Bane quality will choose a specific
                  substance at the time the weapon is acquired, which may not be
                  changed. This Bane will be noted on the item card.
                </List.Item>
                <List.Item>
                  Some Ranged Weapons with the Bane quality may function in a
                  similar fashion. For example, a flame thrower may only ever
                  deal fire damage.
                </List.Item>
                <List.Item>
                  Ranged Weapons which can be loaded with different kinds of
                  ammunition can use “Bane” ammunition, even if the weapon
                  doesn’t have the Bane quality.
                </List.Item>
                <List.Item>
                  Bane Ammunition can be acquired via the “Acquiring Equipment”
                  process below, and counts “against” one Resource dot. Bane
                  ammunition is specialized, and cannot be purchased with
                  disposable income.
                </List.Item>
                <List.Item>
                  A single Bane Ammunition item card is good for six attacks in
                  a single clip (or 3 attacks for weapons with the Automatic
                  Fire quality). After use, the card must be returned to a
                  Storyteller.
                </List.Item>
              </List.Root>
            </>
          }
        />
        <Blockquote
          heading="Qualities and Weapon Usage"
          text={
            <>
              <Text className="mb-4">
                A weapon will not carry any of its normal qualities if used in a
                manner other than its intended design. For example, a wooden
                stake with the “Staking” quality would lose that quality if
                thrown at an enemy, and a longbow used to swing in Melee would
                lose the “Bane” quality.
              </Text>
              <Text className="mb-4">
                This will be our default rule, but as always specific situations
                are entirely up to Storyteller discretion.
              </Text>
            </>
          }
        />
        <Heading className="subheading !text-inherit">
          Acquiring Equipment
        </Heading>
        <Text className="mb-4">
          We have provided a simple system for characters to acquire gear with
          mechanics using their Resources background. Please note that, at
          Storyteller discretion, certain types of gear may require Allies or
          Contacts with certain Spheres of Influence to acquire - This includes
          any illegal items.
        </Text>
        <Blockquote
          heading="Acquiring Weapons & Protective Gear"
          text={
            <>
              <Text className="mb-4">
                During each game, a character may “Purchase” one “quality”
                weapon or piece of protective gear for each dot of the Resources
                background that character possesses. This gear may be acquired
                at check-in or during play.
              </Text>
              <Text className="mb-4">
                The player will select the weapon quality for the weapon (with
                Storyteller approval) and receive an item card reflecting the
                quality of the gear purchased.
              </Text>
            </>
          }
        />
        <Blockquote
          heading="Acquiring Miscellaneous Gear"
          text={
            <>
              <Text className="mb-4">
                Alternatively, a character may use their Resource dots to
                acquire Miscellaneous Gear, as described in Appendix A:
                Equipment. Miscellaneous gear will cost against one Resource dot
                (Proficient), two dots (Superior) or three dots (Artisan).
                Similar to weapons / protective gear, Miscellaneous gear may
                either be acquired at check-in or during play.
              </Text>
              <Text className="mb-4">
                Individual resource dots may be used for weapons / armor, or for
                miscellaneous gear, but not for both - though they may be mixed
                and matched. (for example, a ranged weapon and piece of superior
                miscellaneous gear would use all three of a character’s resource
                dots)
              </Text>
            </>
          }
        />
        <Blockquote
          heading="Acquiring Gear Using Disposable Income"
          text={
            <>
              <Text className="mb-4">
                Disposable income per the Resources background may be used to
                acquire additional weapons, armor or other gear during play, but
                the gear acquired will be purely narrative and will carry no
                bonuses or qualities.
              </Text>
              <CollapsibleSection title="Example #1" className="pl-12">
                <Text className="mb-4">
                  A character uses their disposable income to buy a hunting
                  rifle at the local outdoor store. This rifle could then be
                  used narratively as a Ranged Weapon, but will have no
                  qualities.
                </Text>
                <Text className="mb-4">
                  That character, alternatively, might decide to use the system
                  above to acquire a hunting rifle using resource dots. In this
                  case, that rifle will carry a Ranged Weapon quality, such as
                  “Long Range.”
                </Text>
              </CollapsibleSection>
              <CollapsibleSection title="Example #2" className="pl-12">
                <Text className="mb-4">
                  A player decides during check-in that they want their
                  character to arrive in style, and uses all three Resource dots
                  to purchase a luxury sports car. This car would be of
                  “Artisan” quality, providing a +3 bonus to uses of the Driving
                  skill.
                </Text>
                <Text className="mb-4">
                  During play, a second character becomes jealous of the first
                  character’s very fine ride, and decides to buy their own
                  sports car during play using disposable income. They spend
                  $100,000 of the character’s cash to purchase a similar car.
                </Text>
                <Text className="mb-4">
                  Because this car was bought using disposable income, it will
                  still function narratively as a vehicle and will still
                  function equally as a status symbol, but will not provide any
                  mechanical bonus to Driving checks.
                </Text>
              </CollapsibleSection>
            </>
          }
        />
        <Blockquote
          heading="Acquiring Gear During Play"
          text={
            <>
              <Text className="mb-4">
                While the system above is the main way in which characters will
                acquire their gear, equipment might also be acquired through
                play. For example, a character might loot a new firearm off of a
                defeated gang member. Gear acquired this way requires
                Storyteller approval. After the scene concludes, visit the
                check-in table to have an item card created for your character.
              </Text>
            </>
          }
        />
      </Box>
      <ReawakeningQuickLinks />
    </Box>
  );
}
