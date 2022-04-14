import { BigInt } from "@graphprotocol/graph-ts"
import {
  YodaLottery,
  AdminTokenRecovery,
  LotteryClose,
  LotteryInjection,
  LotteryNumberDrawn,
  LotteryOpen,
  NewOperatorAndTreasuryAndInjectorAddresses,
  NewRandomGenerator,
  OwnershipTransferred,
  TicketsClaim,
  TicketsPurchase
} from "../generated/YodaLottery/YodaLottery"
import { ExampleEntity } from "../generated/schema"

export function handleAdminTokenRecovery(event: AdminTokenRecovery): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.token = event.params.token
  entity.amount = event.params.amount

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.MAX_LENGTH_LOTTERY(...)
  // - contract.MAX_TREASURY_FEE(...)
  // - contract.MIN_DISCOUNT_DIVISOR(...)
  // - contract.MIN_LENGTH_LOTTERY(...)
  // - contract.calculateTotalPriceForBulkTickets(...)
  // - contract.currentLotteryId(...)
  // - contract.currentTicketId(...)
  // - contract.injectorAddress(...)
  // - contract.maxNumberTicketsPerBuyOrClaim(...)
  // - contract.maxPriceTicketInToken(...)
  // - contract.minPriceTicketInToken(...)
  // - contract.operatorAddress(...)
  // - contract.owner(...)
  // - contract.pendingInjectionNextLottery(...)
  // - contract.randomGenerator(...)
  // - contract.token(...)
  // - contract.treasuryAddress(...)
  // - contract.viewCurrentLotteryId(...)
  // - contract.viewLottery(...)
  // - contract.viewNumbersAndStatusesForTicketIds(...)
  // - contract.viewRewardsForTicketId(...)
  // - contract.viewUserInfoForLotteryId(...)
}

export function handleLotteryClose(event: LotteryClose): void {}

export function handleLotteryInjection(event: LotteryInjection): void {}

export function handleLotteryNumberDrawn(event: LotteryNumberDrawn): void {}

export function handleLotteryOpen(event: LotteryOpen): void {}

export function handleNewOperatorAndTreasuryAndInjectorAddresses(
  event: NewOperatorAndTreasuryAndInjectorAddresses
): void {}

export function handleNewRandomGenerator(event: NewRandomGenerator): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTicketsClaim(event: TicketsClaim): void {}

export function handleTicketsPurchase(event: TicketsPurchase): void {}
